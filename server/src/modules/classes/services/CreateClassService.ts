import { injectable, inject } from 'tsyringe';

import AppError from 'utils/errors/AppError';
import IUsersRepository from 'modules/users/infra/repositories/IUsersRepository';
import IClassesRepository from '../infra/repositories/IClassesRepository';
import Class from '../infra/entities/Class';

interface IRequest {
  subject: string;
  cost: number;
  user_id: string;
}

@injectable()
class CreateClassService {
  constructor(
    @inject('ClassesRepository')
    private classesRepository: IClassesRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ subject, cost, user_id }: IRequest): Promise<Class> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Usuário inexistente.');
    }

    const createdClass = await this.classesRepository.create({
      subject,
      cost,
      user_id,
    });

    return createdClass;
  }
}

export default CreateClassService;
