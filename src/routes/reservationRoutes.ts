import express from "express";

import validateSchema from "../middlewares/validateSchemaMiddleware";
import { reservationSchema } from "../schemas/reservationSchemas";

const reservationRouter = express.Router();

reservationRouter.post("/reservation", validateSchema(reservationSchema));
reservationRouter.post("/checkin/:id");

export default reservationRouter;
