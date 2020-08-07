import ICreateClassDTO from 'modules/classes/dtos/ICreateClassDTO';
import Class from '../entities/Class';

export default interface IClassesRepository {
  create(data: ICreateClassDTO): Promise<Class>;
}
