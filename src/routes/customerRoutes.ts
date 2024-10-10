import express from "express";

import validateSchema from "../middlewares/validateSchemaMiddleware";
import customerControllers from "../controllers/customerControllers";
import { registerSchema, loginSchema } from "../schemas/customerSchema";

const customerRouter = express.Router();

customerRouter.post(
  "/register",
  validateSchema(registerSchema),
  customerControllers.registerCustomer
);

customerRouter.post(
  "/login",
  validateSchema(loginSchema),
  customerControllers.loginCustomer
);

export default customerRouter;
