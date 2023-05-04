import { UserRepository } from '../repository/UserResository';
import { HttpException } from '../../../errors/HttpException';

export class DeleteUserService {
  private repository;

  constructor(userRepository: UserRepository) {
    this.repository = userRepository;
  }

  public async execute(id: string): Promise<void> {
    const user = await this.repository.getOne(id);

    if (!user) {
      throw new HttpException(404, 'User not found.');
    }

    await this.repository.delete(id);
  }
}
