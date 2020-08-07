import { container } from 'tsyringe';
import { Request, Response } from 'express';

import CreateClassService from 'modules/classes/services/CreateClassService';

class ClassesController {
  async create(request: Request, response: Response): Promise<Response> {
    const { subject, cost, user_id } = request.body;

    const createClass = container.resolve(CreateClassService);

    const classCreated = await createClass.execute({ subject, cost, user_id });

    return response.json(classCreated);
  }
}

export default ClassesController;
