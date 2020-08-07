import { Repository, getRepository } from 'typeorm';

import ICreateUserDTO from 'modules/users/dtos/ICreateUserDTO';
import IUsersRepository from './IUsersRepository';
import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository = new Repository<User>();

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create({ name, bio, whatsapp }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({ name, bio, whatsapp });

    await this.ormRepository.save(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    await this.ormRepository.save(user);

    return user;
  }
}

export default UsersRepository;
