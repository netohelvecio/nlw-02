import { Repository, getRepository } from 'typeorm';

import ICreateClassDTO from 'modules/classes/dtos/ICreateClassDTO';
import IClassesRepository from './IClassesRepository';
import Class from '../entities/Class';

class ClassesRepository implements IClassesRepository {
  private ormRepository = new Repository<Class>();

  constructor() {
    this.ormRepository = getRepository(Class);
  }

  public async create({
    subject,
    cost,
    user_id,
  }: ICreateClassDTO): Promise<Class> {
    const createdClass = this.ormRepository.create({ subject, cost, user_id });

    await this.ormRepository.save(createdClass);

    return createdClass;
  }

  public async findById(id: string): Promise<Class | undefined> {
    const findClass = await this.ormRepository.findOne(id);

    return findClass;
  }
}

export default ClassesRepository;
