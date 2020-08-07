import ICreateClassScheduleDTO from 'modules/classes/dtos/ICreateClassScheduleDTO';
import ClassSchedule from '../entities/ClassSchedule';

export default interface IClassSchedulesRepository {
  create(data: ICreateClassScheduleDTO[]): ClassSchedule[];
  save(classSchedule: ClassSchedule[]): Promise<void>;
}
