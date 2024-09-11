import express from "express";
import reservationRouter from "./reservationRoutes";

const globalRouter = express.Router();

globalRouter.use(reservationRouter);

export default globalRouter;
