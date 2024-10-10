import joi from "joi";

export const registerSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  cpf: joi
    .string()
    .pattern(/^\d{11}$/)
    .required(),
  password: joi.string().required(),
  confirmPassword: joi.string().required().valid(joi.ref("password")),
});

export const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});
