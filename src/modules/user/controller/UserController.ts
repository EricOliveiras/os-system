import { Request, Response } from 'express';

import { CreateUserService } from '../service/CreateUserService';
import { UserRepository } from '../repository/UserResository';
import { GetUserService } from '../service/GetUserService';
import { GetAllUsersService } from '../service/GetAllUsersService';
import { UpdateUserService } from '../service/UpdateUserService';
import { DeleteUserService } from '../service/DeleteUserService';
import { UpdateUserPassword } from '../service/UpdateUserPassword';
import { IUserRequest, IUserUpdateRequest } from '../interface/IUserRequest';

const userRepository = new UserRepository();

export default {
  async createUser(request: Request, response: Response) {
    const { username, fullname, password, roleId }: IUserRequest = request.body;

    const createUser = new CreateUserService(userRepository);

    await createUser.execute({
      username,
      fullname,
      password,
      roleId
    });

    return response.status(201).json({
      error: false,
      message: 'Success: Successfully created user.',
    });
  },

  async getUser(request: Request, response: Response) {
    const { id } = request.params;

    const getUser = new GetUserService(userRepository);

    const user = await getUser.execute(id);

    return response.status(200).json({
      error: false,
      message: 'Success in searching for user.',
      user
    });
  },

  async getAll(request: Request, response: Response) {
    const getUsers = new GetAllUsersService(userRepository);

    const users = await getUsers.execute();

    return response.status(200).json({
      error: false,
      message: 'Success in searching for users.',
      users
    });
  },

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { username, fullname, roleId }: IUserUpdateRequest = request.body;

    const updateUser = new UpdateUserService(userRepository);

    await updateUser.execute(id, {
      username,
      fullname,
      roleId
    });

    return response.status(200).json({
      error: false,
      message: 'Success in updating user.',
    });
  },

  async updatePassword(request: Request, response: Response) {
    const { id } = request.params;
    const { password } = request.body;

    const updatePassword = new UpdateUserPassword(userRepository);

    await updatePassword.execute(id, password);

    return response.status(200).json({
      error: false,
      message: 'Success in updating user password.',
    });
  },

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteUser = new DeleteUserService(userRepository);

    await deleteUser.execute(id);

    return response.status(200).json({
      error: false,
      message: 'Success in deleting user.',
    });
  }
};
