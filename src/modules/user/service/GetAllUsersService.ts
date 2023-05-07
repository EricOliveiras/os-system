import { UserRepository } from '../repository/UserResository';
import { IUserResponse } from '../interface/IUserResponse';

export class GetAllUsersService {
  private repository;

  constructor(userRepository: UserRepository) {
    this.repository = userRepository;
  }

  public async execute(): Promise<IUserResponse[]> {
    return await this.repository.getAll();
  }
}
