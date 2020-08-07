import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import UsersController from '../controller/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      bio: Joi.string().required().max(255),
      whatsapp: Joi.string()
        .required()
        .pattern(/^[0-9]+$/, 'numbers'),
    },
  }),
  usersController.create,
);

export default usersRouter;
