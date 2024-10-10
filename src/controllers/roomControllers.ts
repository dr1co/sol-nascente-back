import { Request, Response, NextFunction } from "express";

import roomModels from "../models/roomModel";

async function getAllRooms(req: Request, res: Response, next: NextFunction) {
  try {
    const rooms = await roomModels.getAvailableRooms();

    res.status(200).send(rooms);
  } catch (err) {
    res.status(500).send(err);
  }
}

const roomControllers = {
  getAllRooms,
};

export default roomControllers;
