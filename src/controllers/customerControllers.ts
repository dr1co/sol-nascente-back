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

const customerControllers = {
  registerCustomer,
};

export default customerControllers;
