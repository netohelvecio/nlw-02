import { Router } from 'express';

import usersRouter from 'modules/users/http/routes/users.router';
import classesRouter from 'modules/classes/http/routes/classes.router';
import classSchedulesRouter from 'modules/classes/http/routes/classSchedules.router';
import connectionsRouter from 'modules/users/http/routes/connections.router';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/connections', connectionsRouter);
routes.use('/classes', classesRouter);
routes.use('/class-schedules', classSchedulesRouter);

export default routes;
