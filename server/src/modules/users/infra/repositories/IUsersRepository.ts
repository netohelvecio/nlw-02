import ICreateUserDTO from 'modules/users/dtos/ICreateUserDTO';
import User from '../entities/User';

export default interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
  findById(id: string): Promise<User | undefined>;
}
