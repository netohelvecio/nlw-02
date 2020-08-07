import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import routes from 'routes';
import { errors } from 'celebrate';

import './database/index';
import './containers';

import AppError from 'utils/errors/AppError';

const app = express();

app.use(express.json());
app.use(routes);
app.use(errors());

app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response
        .status(err.statusCode)
        .json({ status: 'error', message: err.message });
    }

    console.error(err);

    return response
      .status(500)
      .json({ status: 'error', message: 'Internal server error' });
  },
);

app.use('/', (request, response) => {
  return response.json({ message: 'NLW #02' });
});

app.listen(3333, () => {
  console.log('Server is running on port 3333 🚀');
});
