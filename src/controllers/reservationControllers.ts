import { Request, Response, NextFunction } from "express";

import reservationModels from "../models/reservationModel";
import customerModels from "../models/customerModels";

async function validateReservation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const body = res.locals.body;

  try {
    const createCustomer = await customerModels.create(body.name);
    const dateCheckout = new Date(body.dateCheckin);
    dateCheckout.setDate(dateCheckout.getDate() + 5);

    const placeReservation = await reservationModels.create(
      createCustomer.id,
      body.dateCheckin,
      dateCheckout
    );

    res.status(201).send({ id: placeReservation.id });
  } catch (err) {
    res.status(500).send(err);
  }
}
