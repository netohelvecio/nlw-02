import Connection from '../entities/Connection';

export default interface IConnectionsRepository {
  create(user_id: string): Promise<Connection>;
  countAll(): Promise<number>;
}
