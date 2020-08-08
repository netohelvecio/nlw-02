import { Repository, getRepository } from 'typeorm';

import IConnectionsRepository from './IConnectionsRepository';
import Connection from '../entities/Connection';

class ConnectionsRepository implements IConnectionsRepository {
  private ormRepository = new Repository<Connection>();

  constructor() {
    this.ormRepository = getRepository(Connection);
  }

  public async create(user_id: string): Promise<Connection> {
    const connection = this.ormRepository.create({ user_id });

    await this.ormRepository.save(connection);

    return connection;
  }

  public async countAll(): Promise<number> {
    const connection = await this.ormRepository.findAndCount();

    return connection[1];
  }
}

export default ConnectionsRepository;
