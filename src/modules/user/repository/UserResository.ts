import { prisma as db } from '../../../config/prisma';

import { IUserRespository } from '../interface/IUserRepository';
import { IUserRequest, IUserUpdateRequest } from '../interface/IUserRequest';
import { IUserResponse } from '../interface/IUserResponse';

export class UserRepository implements IUserRespository {
  public async create({ username, fullname, password, roleId }: IUserRequest): Promise<IUserResponse> {
    return await db.user.create({
      data: {
        username,
        fullname,
        password,
        roleId,
      }
    });
  }

  public async getAll(): Promise<IUserResponse[]> {
    return await db.user.findMany({
      include: {
        serviceOrder: true
      }
    });
  }

  public async getOne(id: string): Promise<IUserResponse | null> {
    return await db.user.findUnique({
      where: { id },
      include: {
        serviceOrder: true,
      }
    });
  }

  public async update(id: string, data: IUserUpdateRequest): Promise<void> {
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

  public async getByUsername(username: string) {
    const user = await db.user.findFirst({
      where: { username },
      select: {
        id: true,
        username: true,
        password: true,
        User_Role: {
          select: {
            Role: {
              select: {
                Permission_Role: {
                  select: {
                    Permission: {
                      select: {
                        id: true,
                        name: true
                      }
                    }
                  }
                }
              }
            }
          }
        },
        serviceOrder: true
      }
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
