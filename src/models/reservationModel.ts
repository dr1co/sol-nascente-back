import client from "../database/prisma";

async function create(
  customerId: number,
  dateCheckin: string,
  dateCheckout: string
) {
  const reservation = await client.reservation.create({
    data: {
      id_customer: customerId,
      id_room: 1,
      date_checkin: dateCheckin,
      date_checkout: dateCheckout,
      status: "active",
    },
  });

  return reservation;
}

async function findById(id: number) {
  const reservation = await client.reservation.findUnique({
    where: {
      id,
    },
  });

  return reservation;
}

const reservationModels = {
  findById,
  create,
};

export default reservationModels;
