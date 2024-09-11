import joi from "joi";

export const reservationSchema = joi.object({
  name: joi.string().required(),
  dateCheckin: joi.date().required(),
  roomNumber: joi.number().required(),
});
