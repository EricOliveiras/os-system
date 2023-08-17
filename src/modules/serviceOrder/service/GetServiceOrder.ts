import { serviceOrder } from '@prisma/client';

import { ServiceOrderRepository } from '../repository/ServiceOrderRepository';
import { HttpException } from '../../../errors/HttpException';

export class GetServiceOrder {
  private repository;

  constructor(serviceOrderRepository: ServiceOrderRepository) {
    this.repository = serviceOrderRepository;
  }

  public async execute(id: number): Promise<serviceOrder> {
    const serviceOrder = await this.repository.getOne(id);

    if (!serviceOrder) {
      throw new HttpException(404, 'Service order not found.');
    }

    return serviceOrder;
  }
}
