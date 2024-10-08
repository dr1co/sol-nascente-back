import { Request, Response, NextFunction } from "express";

import reservationModels, {
  ReservationInterface,
  ReservationStatus,
} from "../models/reservationModel";
import customerModels from "../models/customerModel";
import roomModels, { RoomStatus } from "../models/roomModel";

async function validateReservation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const body = res.locals.body as Omit<ReservationInterface, "id" | "status">;

  try {
    const room = await roomModels.findById(body.roomId);

    if (room.status !== RoomStatus.available) {
      return res.status(401).send({ error: "Room is not available!" });
    }

    const customer = await customerModels.findById(body.customerId);

    if (!customer) {
      return res.status(404).send({ error: "Customer not found!" });
    }

    const placeReservation = await reservationModels.create({
      customerId: customer.id,
      roomId: body.roomId,
      dateCheckin: body.dateCheckin,
      dateCheckout: body.dateCheckout,
    });

    await roomModels.updateStatusById(body.roomId, RoomStatus.booked);

    res.status(201).send({ placeReservation });
  } catch (err) {
    res.status(500).send(err);
  }
}

async function validateCheckin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  try {
    const reservation = await reservationModels.findById(Number(id));

    if (!reservation) {
      return res.status(404).send({ error: "Reservation not found!" });
    }

    await reservationModels.updateStatusById(
      Number(id),
      ReservationStatus.checkin
    );

    res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function validateCheckout(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  try {
    const reservation = await reservationModels.findById(Number(id));

    if (!reservation) {
      return res.status(404).send({ error: "Reservation not found!" });
    }

    await reservationModels.updateStatusById(
      Number(id),
      ReservationStatus.closed
    );

    await roomModels.updateStatusById(
      reservation.id_room,
      RoomStatus.available
    );

    res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err);
  }
}

const reservationControllers = {
  validateReservation,
  validateCheckin,
  validateCheckout,
};

export default reservationControllers;
