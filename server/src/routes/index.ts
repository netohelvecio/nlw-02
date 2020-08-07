import { Router } from 'express';

import usersRouter from 'modules/users/http/routes/users.router';
import classesRouter from 'modules/classes/http/routes/classes.router';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/classes', classesRouter);

export default routes;
