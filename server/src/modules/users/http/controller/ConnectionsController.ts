import { container } from 'tsyringe';
import { Request, Response } from 'express';

import CreateConnectionService from 'modules/users/services/CreateConnectionService';
import CountAllConnectionsService from 'modules/users/services/CountAllConnectionsService';

class ConnectionsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.body;

    const createConnection = container.resolve(CreateConnectionService);

    const connection = await createConnection.execute(user_id);

    return response.json(connection);
  }

  async index(request: Request, response: Response): Promise<Response> {
    const countAllConnections = container.resolve(CountAllConnectionsService);

    const numberOfConnections = await countAllConnections.execute();

    return response.json({ total: numberOfConnections });
  }
}

export default ConnectionsController;
