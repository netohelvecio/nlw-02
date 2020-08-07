import { Router } from 'express';

import usersRouter from 'modules/users/http/routes/users.router';
import classesRouter from 'modules/classes/http/routes/classes.router';
import classSchedulesRouter from 'modules/classes/http/routes/classSchedules.router';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/classes', classesRouter);
routes.use('/class-schedules', classSchedulesRouter);

export default routes;
