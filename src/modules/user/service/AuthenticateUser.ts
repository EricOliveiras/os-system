import { sign } from 'jsonwebtoken';
import hash from 'bcrypt';

import { HttpException } from '../../../errors/HttpException';
import { UserRepository } from '../repository/UserResository';
import { jwtSecret } from '../../../config/vars';

export class AuthenticateUser {
  private repository;

  constructor(userRepository: UserRepository) {
    this.repository = userRepository;
  }

  public async execute(username: string, password: string): Promise<string> {
    const user = await this.repository.getByUsername(username.toLowerCase());

    if (!user || !hash.compareSync(password, user.password)) {
      throw new HttpException(401, 'Ivalid credentials.');
    }

    const permissions = user.User_Role.map((i) => {
      return i.Role.Permission_Role.map((i) => i.Permission.name);
    }).flat(1);

    const token = sign(
      { user_id: user.id, permissions: permissions },
      jwtSecret,
      { expiresIn: '7d' },
    );

    return token;
  }
}

