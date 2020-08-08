import { injectable, inject } from 'tsyringe';
import fs from 'fs';
import path from 'path';

import AppError from 'utils/errors/AppError';
import uploadConfig from 'config/upload';
import IUsersRepository from '../infra/repositories/IUsersRepository';
import User from '../infra/entities/User';

interface IRequest {
  user_id: string;
  filename: string;
}

@injectable()
class UploadAvatarUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ user_id, filename }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Usuário inexistente.');
    }

    // await fs.promises.rename(path.resolve(uploadConfig.tmpFolder, filename));

    user.avatar = filename;

    await this.usersRepository.save(user);

    return user;
  }
}

export default UploadAvatarUserService;
