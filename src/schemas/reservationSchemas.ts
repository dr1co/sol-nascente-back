import joi from "joi";

export const reservationSchema = joi.object().keys({
  customerId: joi.number().integer().required(),
  roomId: joi.number().integer().required(),
  dateCheckin: joi.string().isoDate().required(),
  dateCheckout: joi.string().isoDate().required(),
});
