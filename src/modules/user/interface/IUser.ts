export interface IUser {
  username: string;
  fullname: string;
  password: string;
  roleId: number;
}

export interface IUserUpdate {
  username: string;
  fullname: string;
  password?: string;
  roleId: number;
}
