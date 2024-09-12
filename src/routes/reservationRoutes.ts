import express from "express";

import validateSchema from "../middlewares/validateSchemaMiddleware";
import { reservationSchema } from "../schemas/reservationSchemas";
import reservationControllers from "../controllers/reservationControllers";

const reservationRouter = express.Router();

reservationRouter.post("/reservation", validateSchema(reservationSchema), reservationControllers.validateReservation);
reservationRouter.post("/checkin/:id");

export default reservationRouter;
