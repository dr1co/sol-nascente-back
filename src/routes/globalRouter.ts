import express from "express";
import reservationRouter from "./reservationRoutes";
import customerRouter from "./customerRoutes";
import roomRouter from "./roomRoutes";

const globalRouter = express.Router();

globalRouter.use(reservationRouter);
globalRouter.use(customerRouter);
globalRouter.use(roomRouter);

export default globalRouter;
