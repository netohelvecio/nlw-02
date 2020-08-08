import { injectable, inject } from 'tsyringe';

import IConnectionsRepository from '../infra/repositories/IConnectionsRepository';

@injectable()
class CountAllConnectionsService {
  constructor(
    @inject('ConnectionsRepository')
    private connectionsRepository: IConnectionsRepository,
  ) {}

  public async execute(): Promise<number> {
    const numberOfConnections = await this.connectionsRepository.countAll();

    return numberOfConnections;
  }
}

export default CountAllConnectionsService;
