import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ClassSchedulesController from '../controller/ClassSchedulesController';

const classSchedulesRouter = Router();
const classSchedulesController = new ClassSchedulesController();

classSchedulesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      class_id: Joi.string().required().uuid(),
      schedule: Joi.array()
        .items(
          Joi.object({
            week_day: Joi.number().min(0).max(7).required(),
            from: Joi.string().required(),
            to: Joi.string().required(),
          }),
        )
        .required(),
    },
  }),
  classSchedulesController.create,
);

export default classSchedulesRouter;
