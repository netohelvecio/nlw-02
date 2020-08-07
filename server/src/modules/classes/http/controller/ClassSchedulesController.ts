import { container } from 'tsyringe';
import { Request, Response } from 'express';

import CreateClassScheduleService from 'modules/classes/services/CreateClassScheduleService';

class ClassSchedulesController {
  async create(request: Request, response: Response): Promise<Response> {
    const { schedule, class_id } = request.body;

    const createClassSchedule = container.resolve(CreateClassScheduleService);

    const classSchedule = await createClassSchedule.execute(schedule, class_id);

    return response.json(classSchedule);
  }
}

export default ClassSchedulesController;
