import express from "express";

import roomControllers from "../controllers/roomControllers";

const roomRouter = express.Router();

roomRouter.get("/rooms", roomControllers.getAllRooms);

export default roomRouter;
