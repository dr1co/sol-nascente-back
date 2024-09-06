import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const PORT = Number(process.env.PORT) | 4001;

const server = express();
server.use(cors());

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
