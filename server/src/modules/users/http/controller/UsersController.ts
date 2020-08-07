import { container } from 'tsyringe';
import { Request, Response } from 'express';

import CreateUserService from 'modules/users/services/CreateUserService';

class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, bio, whatsapp } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({ name, bio, whatsapp });

    return response.json(user);
  }
}

export default UsersController;
