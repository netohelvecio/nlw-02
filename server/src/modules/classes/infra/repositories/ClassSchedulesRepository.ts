import { Repository, getRepository } from 'typeorm';

import ICreateClassScheduleDTO from 'modules/classes/dtos/ICreateClassScheduleDTO';
import ClassSchedule from '../entities/ClassSchedule';
import IClassSchedulesRepository from './IClassSchedulesRepository';

class ClassSchedulesRepository implements IClassSchedulesRepository {
  private ormRepository = new Repository<ClassSchedule>();

  constructor() {
    this.ormRepository = getRepository(ClassSchedule);
  }

  public create(data: ICreateClassScheduleDTO[]): ClassSchedule[] {
    const classSchedule = this.ormRepository.create(data);

    return classSchedule;
  }

  public async save(classSchedule: ClassSchedule[]): Promise<void> {
    await this.ormRepository.save(classSchedule);
  }
}

export default ClassSchedulesRepository;
