import client from "../database/prisma";

enum RoomStatus {
  available = "available",
  booked = "booked",
  maintenance = "maintenance",
}

async function findById(id: number) {
  const room = await client.room.findUniqueOrThrow({
    where: {
      id
    }
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
    }
  });
}

const roomModels = {
  findById,
  updateStatusById,
  RoomStatus,
}

export default roomModels;
