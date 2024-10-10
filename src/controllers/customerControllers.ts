import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

import customerModels from "../models/customerModel";
import { RegisterInterface } from "../models/customerModel";

dotenv.config();

const BCRYPT_FACTOR = Number(process.env.BCRYPT_FACTOR) || 5;

async function registerCustomer(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const body = res.locals.body as Omit<RegisterInterface, "id">;

  try {
    const findCustomerByCpf = await customerModels.findByCpf(body.cpf);

    if (findCustomerByCpf) {
      return res
        .status(401)
        .send({ error: "Customer is already registered! (CPF already used)" });
    }

    const findCustomerByEmail = await customerModels.findByEmail(body.email);

    if (findCustomerByEmail) {
      return res.status(401).send({ error: "Email is already in use!" });
    }

    const encryptedPassword = await bcrypt.hash(body.password, BCRYPT_FACTOR);

    const newCustomer = await customerModels.create({
      ...body,
      password: encryptedPassword,
    });

    return res.status(201).send({ data: newCustomer });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
}

async function loginCustomer(req: Request, res: Response, next: NextFunction) {
  const body = res.locals.body as Pick<RegisterInterface, "email" | "password">;

  try {
    const customer = await customerModels.findByEmail(body.email);

    if (!customer) {
      return res.status(401).send({ error: "Incorrect credentials!" });
    }

    const matchPassword = await bcrypt.compare(
      body.password,
      customer.password
    );

    if (!matchPassword) {
      return res.status(401).send({ error: "Incorrect credentials!" });
    }

    return res.status(200).send({
      id: customer.id,
      name: customer.name,
      email: customer.email,
      cpf: customer.cpf,
    });
  } catch (err) {
    return res.status(500).send(err);
  }
}

const customerControllers = {
  registerCustomer,
  loginCustomer,
};

export default customerControllers;
