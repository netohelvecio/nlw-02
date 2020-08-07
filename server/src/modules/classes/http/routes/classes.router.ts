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

export default classesRouter;
