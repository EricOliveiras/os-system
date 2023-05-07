import { Permission, User_Role } from '@prisma/client';

export interface IUserResponse {
  id: string;
  username: string;
  fullname: string;
  password?: string;
  roleId: number;
  roles?: User_Role | User_Role[];
  permissions?: Permission | Permission[];
}

