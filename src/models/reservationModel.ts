import client from "../database/prisma";

export enum ReservationStatus {
  active = "active",
  cancelled = "cancelled",
  checkin = "checkin",
  closed = "closed",
}

export interface ReservationInterface {
  id: number;
  customerId: number;
  roomId: number;
  dateCheckin: string;
  dateCheckout: string;
  status: ReservationStatus;
}

async function create(
  reservationData: Omit<ReservationInterface, "id" | "status">
) {
  const { customerId, roomId, dateCheckin, dateCheckout } = reservationData;

  const reservation = await client.reservation.create({
    data: {
      id_customer: customerId,
      id_room: roomId,
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
      status,
    },
    where: {
      id,
    },
  });
}

const reservationModels = {
  findById,
  create,
  updateStatusById,
};

export default reservationModels;
