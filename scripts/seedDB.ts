import client from "../src/database/prisma";

async function populateDB() {
  try {
    await client.room.createMany({
      data: [
        {
          number: 101,
          status: "available"
        },
        {
          number: 102,
          status: "available"
        },
        {
          number: 103,
          status: "available"
        }
      ]
    });
  } catch (err) {
    console.log(err);
  }

  console.log("Created 3 rooms!");
}

populateDB();
