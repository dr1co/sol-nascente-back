import { Request, Response, NextFunction } from "express";

import { ReservationInterface } from "../models/reservationModel";

export default function validateDate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const body = res.locals.body as Omit<ReservationInterface, "id" | "status">;

  const dateCheckin = new Date(body.dateCheckin);
  const dateCheckout = new Date(body.dateCheckout);

  if (dateCheckout.getTime() < dateCheckin.getTime()) {
    return res
      .status(422)
      .send({ error: "Checkout date must be after checkin date" });
  }

  next();
}
