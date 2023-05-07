export interface IUserAuthRequest {
  username: string;
  password: string;
}

export interface IUserAuthResponse {
  user: {
    id: string;
    username: string;
  };
  token: string;
}
