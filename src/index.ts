import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import globalRouter from "./routes/globalRouter";

dotenv.config();
const PORT = Number(process.env.PORT) | 4001;

const server = express();
server.use(cors());

server.use(globalRouter);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
