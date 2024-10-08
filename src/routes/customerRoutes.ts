import express from "express";

import validateSchema from "../middlewares/validateSchemaMiddleware";
import customerControllers from "../controllers/customerControllers";
import { registerSchema } from "../schemas/customerSchema";

const customerRouter = express.Router();

customerRouter.post(
  "/register",
  validateSchema(registerSchema),
  customerControllers.registerCustomer
);

export default customerRouter;
