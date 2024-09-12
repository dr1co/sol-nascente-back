import joi from "joi";

export const reservationSchema = joi.object({
  name: joi.string().required(),
  cpf: joi.string().pattern(/^\d{11}$/).required(),
  dateCheckin: joi.string().isoDate().required(),
  dateCheckout: joi.string().isoDate().required(),
  roomId: joi.number().required(),
});
