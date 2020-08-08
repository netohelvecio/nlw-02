import { container } from 'tsyringe';
import { Request, Response } from 'express';

import CreateClassService from 'modules/classes/services/CreateClassService';
import SelectClassFilteredService from 'modules/classes/services/SelectClassFilteredService';
import convertHoursToMinutes from 'utils/convertHoursToMinutes';

class ClassesController {
  async create(request: Request, response: Response): Promise<Response> {
    const { subject, cost, user_id } = request.body;

    const createClass = container.resolve(CreateClassService);

    const classCreated = await createClass.execute({ subject, cost, user_id });

    return response.json(classCreated);
  }

  async index(request: Request, response: Response): Promise<Response> {
    const { week_day, subject, time } = request.query;

    const subjectQuery = subject as string;
    const weekDayQuery = week_day as string;
    const timeInMinutes = convertHoursToMinutes(time as string);

    const selectClass = container.resolve(SelectClassFilteredService);

    const classes = await selectClass.execute({
      subject: subjectQuery,
      week_day: Number(weekDayQuery),
      from: timeInMinutes,
      to: timeInMinutes,
    });

    return response.json(classes);
  }
}

export default ClassesController;
