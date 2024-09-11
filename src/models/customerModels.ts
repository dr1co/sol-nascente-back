import client from "../database/prisma";

async function create(name: string) {
  const newCustomer = await client.customer.create({
    data: {
      name,
      email: "email@example.com",
      telephone: "11922223333",
    },
  });

  return newCustomer;
}

const customerModels = {
  create,
};

export default customerModels;
