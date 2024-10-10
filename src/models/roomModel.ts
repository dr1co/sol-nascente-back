import client from "../database/prisma";

export enum RoomStatus {
  available = "available",
  booked = "booked",
  maintenance = "maintenance",
}

async function getAvailableRooms() {
  const rooms = await client.room.findMany({
    where: {
      status: RoomStatus.available,
    },
  });

  return rooms;
}

async function findById(id: number) {
  const room = await client.room.findUniqueOrThrow({
    where: {
      id,
    },
  });

  return room;
}

async function updateStatusById(id: number, status: RoomStatus) {
  const room = await client.room.update({
    data: {
      status: status,
    },
    where: {
      id,
    },
  });
}

const roomModels = {
  findById,
  updateStatusById,
  getAvailableRooms,
};

export default roomModels;
