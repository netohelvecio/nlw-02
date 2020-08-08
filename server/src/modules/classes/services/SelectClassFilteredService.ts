import { injectable, inject } from 'tsyringe';

import IClassSchedulesRepository from '../infra/repositories/IClassSchedulesRepository';
import ClassSchedule from '../infra/entities/ClassSchedule';

interface IRequest {
  subject: string;
  week_day: number;
  from: number;
  to: number;
}

@injectable()
class SelectClassFilteredService {
  constructor(
    @inject('ClassSchedulesRepository')
    private classSchedulesRepository: IClassSchedulesRepository,
  ) {}

  public async execute({
    subject,
    week_day,
    from,
    to,
  }: IRequest): Promise<ClassSchedule[]> {
    const classes = await this.classSchedulesRepository.findBySubjectTimeWeek(
      subject,
      week_day,
      from,
      to,
    );

    return classes;
  }
}

export default SelectClassFilteredService;
