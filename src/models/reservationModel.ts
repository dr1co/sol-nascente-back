import client from "../database/prisma";

enum ReservationStatus {
  active = "active",
  cancelled = "cancelled",
  checkin = "checkin",
  closed = "closed"
}

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

async function updateStatusById(id: number, status: ReservationStatus) {
  const reservation = await client.reservation.update({
    data: {
      status
    },
    where: {
      id
    }
  });
}

const reservationModels = {
  findById,
  create,
  updateStatusById,
  ReservationStatus
};

export default reservationModels;
