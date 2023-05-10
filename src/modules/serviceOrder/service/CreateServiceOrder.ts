import { serviceOrder } from '@prisma/client';

import { IServiceOrderRequest } from '../interface/IServiceOrderRequest';
import { ServiceOrderRepository } from '../repository/ServiceOrderRepository';
import { UserRepository } from '../../user/repository/UserResository';
import { HttpException } from '../../../errors/HttpException';

export class CreateOrderService {
  private serviceOrderRepository;
  private userRepository;

  constructor(
    serviceOrderRepository: ServiceOrderRepository,
    userRepository: UserRepository
  ) {
    this.serviceOrderRepository = serviceOrderRepository;
    this.userRepository = userRepository;
  }

  public async execute({ userId, requester, problemDescription }: IServiceOrderRequest): Promise<serviceOrder> {
    const user = await this.userRepository.getOne(userId);

    if (!user) {
      throw new HttpException(404, 'User not found.');
    }

    return await this.serviceOrderRepository.create({
      userId,
      requester,
      problemDescription
    });
  }
}
