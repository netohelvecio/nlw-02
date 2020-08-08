import { Repository, getRepository } from 'typeorm';

import ICreateClassScheduleDTO from 'modules/classes/dtos/ICreateClassScheduleDTO';
import ClassSchedule from '../entities/ClassSchedule';
import IClassSchedulesRepository from './IClassSchedulesRepository';
import Class from '../entities/Class';

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

  public async findBySubjectTimeWeek(
    subject: string,
    week_day: number,
    from: number,
    to: number,
  ): Promise<ClassSchedule[]> {
    const classesQb = getRepository(Class)
      .createQueryBuilder('class')
      .select('class.id')
      .where('class.subject = :subject', { subject });

    const classSchedule = await getRepository(ClassSchedule)
      .createQueryBuilder('classSchedule')
      .where(`classSchedule.class_id IN (${classesQb.getQuery()})`)
      .andWhere('classSchedule.week_day = :weekDay', { weekDay: week_day })
      .andWhere('classSchedule.from <= :from', { from })
      .andWhere('classSchedule.to > :to', { to })
      .setParameters(classesQb.getParameters())
      .leftJoinAndSelect('classSchedule.class', 'class')
      .leftJoinAndSelect('class.user', 'user')
      .getMany();

    return classSchedule;
  }
}

export default ClassSchedulesRepository;
