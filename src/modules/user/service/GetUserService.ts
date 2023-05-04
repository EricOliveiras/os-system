import { User } from '@prisma/client';

import { UserRepository } from '../repository/UserResository';
import { HttpException } from '../../../errors/HttpException';

export class GetUserService {
  private repository;

  constructor(userRepository: UserRepository) {
    this.repository = userRepository;
  }

  public async execute(id: string): Promise<User | null> {
    const user = await this.repository.getOne(id);

    if (!user) {
      throw new HttpException(404, 'User not found.');
    }

    return user;
  }
}
