export interface IUserRequest {
  username: string;
  fullname: string;
  password: string;
  roleId: number;
}

export interface IUserUpdateRequest {
  username: string;
  fullname: string;
  password?: string;
  roleId: number;
}
