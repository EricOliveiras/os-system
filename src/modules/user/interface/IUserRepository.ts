import { IUserResponse } from './IUserResponse';
import { IUserRequest, IUserUpdateRequest } from './IUserRequest';

export interface IUserRespository {
  create({ username, fullname, password, roleId }: IUserRequest): Promise<IUserResponse>;
  getOne(id: string): Promise<IUserResponse | null>;
  getAll(): Promise<IUserResponse[]>;
  update(id: string, data: IUserUpdateRequest): Promise<void>;
  delete(id: string): Promise<void>
  getByUsername(username: string): Promise<unknown | null>;
  updateUserPassword(id: string, password: string): Promise<void>;
  addRole(id: string, roleId: number): Promise<void>;
}
