import { serviceOrder } from '@prisma/client';

import { ServiceOrderRepository } from '../repository/ServiceOrderRepository';
import { HttpException } from '../../../errors/HttpException';

export class UpdateServiceOrder {
  private repository;

  constructor(serviceOrderRepository: ServiceOrderRepository) {
    this.repository = serviceOrderRepository;
  }

  public async execute(id: number, serviceOrderData: Partial<serviceOrder>): Promise<serviceOrder> {
    const getServiceOrder = await this.repository.getOne(id);

    if (!getServiceOrder) {
      throw new HttpException(404, 'Service order not found.');
    }

    return await this.repository.update(id, serviceOrderData);
  }
}
