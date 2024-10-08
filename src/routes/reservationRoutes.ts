import express from "express";

import validateSchema from "../middlewares/validateSchemaMiddleware";
import validateDate from "../middlewares/validateDateMiddleware";
import { reservationSchema } from "../schemas/reservationSchemas";
import reservationControllers from "../controllers/reservationControllers";

const reservationRouter = express.Router();

reservationRouter.post(
  "/reservation",
  validateSchema(reservationSchema),
  validateDate,
  reservationControllers.validateReservation
);
reservationRouter.post("/checkin/:id", reservationControllers.validateCheckin);
reservationRouter.post(
  "/checkout/:id",
  reservationControllers.validateCheckout
);

export default reservationRouter;
