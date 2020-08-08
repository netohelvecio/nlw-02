import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ClassesController from '../controller/ClassesController';

const classesRouter = Router();
const classesController = new ClassesController();

classesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      subject: Joi.string().required(),
      cost: Joi.number().required(),
      user_id: Joi.string().required().uuid(),
    },
  }),
  classesController.create,
);

classesRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      week_day: Joi.number().min(0).max(7).required(),
      subject: Joi.string().required(),
      time: Joi.string().required(),
    },
  }),
  classesController.index,
);

export default classesRouter;
