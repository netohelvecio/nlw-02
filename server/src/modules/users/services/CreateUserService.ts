import { injectable, inject } from 'tsyringe';

import AppError from 'utils/errors/AppError';
import IUsersRepository from '../infra/repositories/IUsersRepository';
import User from '../infra/entities/User';

interface IRequest {
  name: string;
  bio: string;
  whatsapp: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ name, bio, whatsapp }: IRequest): Promise<User> {
    throw new AppError('teste');

    const createdUser = await this.usersRepository.create({
      name,
      bio,
      whatsapp,
    });

    return createdUser;
  }
}

export default CreateUserService;
