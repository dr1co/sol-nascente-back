import client from "../database/prisma";

async function create(name: string, cpf: string) {
  const newCustomer = await client.customer.create({
    data: {
      name,
      cpf
    },
  });

  return newCustomer;
}

async function findByCpf(cpf: string) {
  const customer = await client.customer.findUnique({
    where: {
      cpf
    }
  });

  return customer;
}

const customerModels = {
  create,
  findByCpf
};

export default customerModels;
