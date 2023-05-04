import { User } from '@prisma/client';

import { UserRepository } from '../repository/UserResository';

export class GetAllUsersService {
  private repository;

  constructor(userRepository: UserRepository) {
    this.repository = userRepository;
  }

  public async execute(): Promise<User[]> {
    return await this.repository.getAll();
  }
}
