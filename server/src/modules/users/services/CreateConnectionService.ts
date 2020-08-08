import { injectable, inject } from 'tsyringe';

import AppError from 'utils/errors/AppError';
import IConnectionsRepository from '../infra/repositories/IConnectionsRepository';
import IUsersRepository from '../infra/repositories/IUsersRepository';
import Connection from '../infra/entities/Connection';

@injectable()
class CreateConnectionService {
  constructor(
    @inject('ConnectionsRepository')
    private connectionsRepository: IConnectionsRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(user_id: string): Promise<Connection> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Usuário inexistente.');
    }

    const connection = await this.connectionsRepository.create(user_id);

    return connection;
  }
}

export default CreateConnectionService;
