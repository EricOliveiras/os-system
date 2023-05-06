import { User } from '@prisma/client';

import { IUser } from './IUser';

export interface IUserRespository {
  create({ username, fullname, password, roleId }: IUser): Promise<User>;
  getOne(id: string): Promise<User | null>;
  getAll(): Promise<User[]>;
  update(id: string, data: IUser): Promise<void>;
  delete(id: string): Promise<void>
  getByUsername(username: string): Promise<User | null>;
  updateUserPassword(id: string, password: string): Promise<void>;
  addRole(id: string, roleId: number): Promise<void>;
}
