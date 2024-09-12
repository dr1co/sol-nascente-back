import { Request, Response, NextFunction } from "express";

import reservationModels from "../models/reservationModel";
import customerModels from "../models/customerModel";
import roomModels from "../models/roomModel";

async function validateReservation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const body = res.locals.body;

  try {
    const room = await roomModels.findById(body.roomId);

    if (room.status !== roomModels.RoomStatus.available) {
      return res.status(401).send({ error: "Room is not available!" });
    }

    const customer = await customerModels.findByCpf(body.cpf);

    let customerId = customer?.id;
    let createCustomer = null;

    if (!customer) {
      createCustomer = await customerModels.create(body.name, body.cpf);
      customerId = createCustomer.id;
    }

    if (!customerId) {
      throw { error: "Customer ID is undefined" };
    }

    const placeReservation = await reservationModels.create(
      customerId,
      body.dateCheckin,
      body.dateCheckout,
    );

    await roomModels.updateStatusById(body.roomId, roomModels.RoomStatus.booked);

    res.status(201).send({ placeReservation });
  } catch (err) {
    res.status(500).send(err);
  }
}

const reservationControllers = {
  validateReservation
};

export default reservationControllers;
