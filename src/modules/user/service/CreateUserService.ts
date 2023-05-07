import { hash } from 'bcrypt';

import { HttpException } from '../../../errors/HttpException';
import { UserRepository } from '../repository/UserResository';
import { saltRounds } from '../../../config/vars';
import { IUserRequest } from '../interface/IUserRequest';

export class CreateUserService {
  private repository;

  constructor(userRespository: UserRepository) {
    this.repository = userRespository;
  }

  public async execute({ username, fullname, password, roleId }: IUserRequest): Promise<void> {
    const usernameExist = await this.repository.getByUsername(username.toLowerCase());

    if (usernameExist) {
      throw new HttpException(409, 'Username already exists.');
    }

    const hashPassword = await hash(password, saltRounds);

    const user = await this.repository.create({
      username,
      fullname,
      password: hashPassword,
      roleId
    });

    await this.repository.addRole(user.id, roleId);
  }
}
