import { injectable, inject } from 'tsyringe';

import AppError from 'utils/errors/AppError';
import convertHoursToMinutes from 'utils/convertHoursToMinutes';
import IClassesRepository from '../infra/repositories/IClassesRepository';
import IClassSchedulesRepository from '../infra/repositories/IClassSchedulesRepository';
import ClassSchedule from '../infra/entities/ClassSchedule';

interface IRequest {
  week_day: number;
  from: string;
  to: string;
}

@injectable()
class CreateClassScheduleService {
  constructor(
    @inject('ClassesRepository')
    private classesRepository: IClassesRepository,

    @inject('ClassSchedulesRepository')
    private classSchedulesRepository: IClassSchedulesRepository,
  ) {}

  public async execute(
    schedule: IRequest[],
    class_id: string,
  ): Promise<ClassSchedule[]> {
    const classExists = await this.classesRepository.findById(class_id);

    if (!classExists) {
      throw new AppError('Aula inexistente.');
    }

    const classSchedule = this.classSchedulesRepository.create(
      schedule.map(scheduleItem => ({
        class_id,
        week_day: scheduleItem.week_day,
        from: convertHoursToMinutes(scheduleItem.from),
        to: convertHoursToMinutes(scheduleItem.to),
      })),
    );

    await this.classSchedulesRepository.save(classSchedule);

    return classSchedule;
  }
}

export default CreateClassScheduleService;
