import express from "express";
import reservationRouter from "./reservationRoutes";
import customerRouter from "./customerRoutes";

const globalRouter = express.Router();

globalRouter.use(reservationRouter);
globalRouter.use(customerRouter);

export default globalRouter;
