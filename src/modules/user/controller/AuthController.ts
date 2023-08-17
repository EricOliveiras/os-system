import { Request, Response } from 'express';

import { IUserAuthRequest } from '../interface/IUserAuthenticate';
import { AuthenticateUser } from '../service/AuthenticateUser';
import { UserRepository } from '../repository/UserResository';

const userRepository = new UserRepository();

export default {
  async login(request: Request, response: Response) {
    const { username, password }: IUserAuthRequest = request.body;

    const auth = new AuthenticateUser(userRepository);

    const token = await auth.execute(username, password);

    return response.status(200).json({
      error: false,
      token
    });
  }
};
