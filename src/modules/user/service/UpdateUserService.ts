import { UserRepository } from '../repository/UserResository';
import { HttpException } from '../../../errors/HttpException';
import { IUserUpdate } from '../interface/IUser';

export class UpdateUserService {
  private repository;

  constructor(userRepository: UserRepository) {
    this.repository = userRepository;
  }

  public async execute(id: string, { username, fullname, roleId }: IUserUpdate): Promise<void> {
    const user = await this.repository.getOne(id);

    if (!user) {
      throw new HttpException(404, 'User not found.');
    }

    await this.repository.update(id, {
      username,
      fullname,
      roleId,
    });
  }
}
