import express from "express";

import validateSchema from "../middlewares/validateSchemaMiddleware";
import { reservationSchema } from "../schemas/reservationSchemas";
import reservationControllers from "../controllers/reservationControllers";

const reservationRouter = express.Router();

reservationRouter.post("/reservation", validateSchema(reservationSchema), reservationControllers.validateReservation);
reservationRouter.post("/checkin/:id", reservationControllers.validateCheckin);
reservationRouter.post("/checkout/:id", reservationControllers.validateCheckout);

export default reservationRouter;
