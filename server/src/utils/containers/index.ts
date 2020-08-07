import { container } from 'tsyringe';

import IUsersRepository from 'modules/users/infra/repositories/IUsersRepository';
import UsersRepository from 'modules/users/infra/repositories/UsersRepository';

import IClassesRepository from 'modules/classes/infra/repositories/IClassesRepository';
import ClassesRepository from 'modules/classes/infra/repositories/ClassesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IClassesRepository>(
  'ClassesRepository',
  ClassesRepository,
);
