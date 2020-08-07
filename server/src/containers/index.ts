import { container } from 'tsyringe';

import IUsersRepository from 'modules/users/infra/repositories/IUsersRepository';
import UsersRepository from 'modules/users/infra/repositories/UsersRepository';

import IClassesRepository from 'modules/classes/infra/repositories/IClassesRepository';
import ClassesRepository from 'modules/classes/infra/repositories/ClassesRepository';

import IClassSchedulesRepository from 'modules/classes/infra/repositories/IClassSchedulesRepository';
import ClassSchedulesRepository from 'modules/classes/infra/repositories/ClassSchedulesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IClassesRepository>(
  'ClassesRepository',
  ClassesRepository,
);

container.registerSingleton<IClassSchedulesRepository>(
  'ClassSchedulesRepository',
  ClassSchedulesRepository,
);
