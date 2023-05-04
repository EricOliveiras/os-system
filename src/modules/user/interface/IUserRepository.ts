import { User } from '@prisma/client';

import { IUser } from './IUser';

export interface IUserRespository {
  create({ username, fullname, password, roleId }: IUser): Promise<void>;
  getOne(id: string): Promise<User | null>;
  getAll(): Promise<User[]>;
  update(id: string, data: IUser): Promise<void>;
  delete(id: string): Promise<void>
  getByUsername(username: string): Promise<User | null>;
}
