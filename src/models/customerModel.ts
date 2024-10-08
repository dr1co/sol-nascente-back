import client from "../database/prisma";

export interface RegisterInterface {
  id: number;
  name: string;
  email: string;
  cpf: string;
  password: string;
}

async function create(customer: Omit<RegisterInterface, "id">) {
  const { name, cpf, email, password } = customer;

  const newCustomer = await client.customer.create({
    data: {
      name,
      cpf,
      email,
      password,
    },
    select: {
      id: true,
      name: true,
      cpf: true,
      email: true,
    },
  });

  return newCustomer;
}

async function findById(id: number) {
  const customer = await client.customer.findUnique({
    where: {
      id,
    },
  });

  return customer;
}

async function findByCpf(cpf: string) {
  const customer = await client.customer.findUnique({
    where: {
      cpf,
    },
  });

  return customer;
}

async function findByEmail(email: string) {
  const customer = await client.customer.findUnique({
    where: {
      email,
    },
  });

  return customer;
}

const customerModels = {
  create,
  findById,
  findByCpf,
  findByEmail,
};

export default customerModels;
