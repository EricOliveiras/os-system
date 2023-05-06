import { HttpException } from '../../../errors/HttpException';
import { UserRepository } from '../repository/UserResository';

export class UpdateUserPassword {
  private repository;

  constructor(userRespository: UserRepository) {
    this.repository = userRespository;
  }

  public async execute(id: string, password: string): Promise<void> {
    const user = await this.repository.getOne(id);

    if (!user) {
      throw new HttpException(404, 'User not found.');
    }

    await this.repository.updateUserPassword(id, password);
  }
}
