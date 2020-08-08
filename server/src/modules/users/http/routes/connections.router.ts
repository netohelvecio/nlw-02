import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ConnectionsController from '../controller/ConnectionsController';

const connectionsRouter = Router();
const connectionsController = new ConnectionsController();

connectionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      user_id: Joi.string().uuid().required(),
    },
  }),
  connectionsController.create,
);

connectionsRouter.get('/', connectionsController.index);

export default connectionsRouter;
