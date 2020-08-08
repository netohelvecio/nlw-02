import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import multer from 'multer';

import uploadConfig from 'config/upload';
import UsersController from '../controller/UsersController';
import UploadAvatarUsersController from '../controller/UploadAvatarUsersController';

const usersRouter = Router();
const usersController = new UsersController();
const uploadAvatarUsersController = new UploadAvatarUsersController();
const upload = multer(uploadConfig);

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

usersRouter.patch(
  '/',
  upload.single('avatar'),
  celebrate({
    [Segments.BODY]: {
      user_id: Joi.string().uuid().required(),
    },
  }),
  uploadAvatarUsersController.create,
);

export default usersRouter;
