import { serviceOrder } from '@prisma/client';

import { ServiceOrderRepository } from '../repository/ServiceOrderRepository';
import { UserRepository } from '../../user/repository/UserResository';
import { HttpException } from '../../../errors/HttpException';

export class GetServiceOrderByUser {
  private serviceOrderRepository;
  private userRepository;

  constructor(
    serviceOrderRepository: ServiceOrderRepository,
    userRepository: UserRepository
  ) {
    this.serviceOrderRepository = serviceOrderRepository;
    this.userRepository = userRepository;
  }

  public async execute(userId: string): Promise<serviceOrder[]> {
    const user = await this.userRepository.getOne(userId);

    if (!user) {
      throw new HttpException(404, 'User not found.');
    }

    return await this.serviceOrderRepository.getAllByUser(userId);
  }
}
