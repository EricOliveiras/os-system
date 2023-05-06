import { User } from '@prisma/client';

import { IUser, IUserUpdate } from '../interface/IUser';
import { IUserRespository } from '../interface/IUserRepository';
import { prisma as db } from '../../../config/prisma';

export class UserRepository implements IUserRespository {
  public async create({ username, fullname, password, roleId }: IUser): Promise<User> {
    return await db.user.create({
      data: {
        username,
        fullname,
        password,
        roleId,
      }
    });
  }

  public async getAll(): Promise<User[]> {
    return await db.user.findMany();
  }

  public async getOne(id: string): Promise<User | null> {
    return await db.user.findUnique({
      where: { id }
    });
  }

  public async update(id: string, data: IUserUpdate): Promise<void> {
    await db.user.update({
      where: { id },
      data: data
    });
  }

  public async delete(id: string): Promise<void> {
    await db.user.delete({
      where: { id }
    });
  }

  public async getByUsername(username: string): Promise<User | null> {
    const user = await db.user.findFirst({
      where: { username }
    });

    return user;
  }

  public async updateUserPassword(id: string, password: string): Promise<void> {
    await db.user.update({
      where: { id },
      data: { password }
    });
  }

  public async addRole(id: string, roleId: number): Promise<void> {
    await db.user_Role.create({
      data: {
        user_id: id,
        role_id: roleId
      }
    });
  }
}
