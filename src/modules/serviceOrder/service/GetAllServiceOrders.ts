import { serviceOrder } from '@prisma/client';

import { ServiceOrderRepository } from '../repository/ServiceOrderRepository';

export class GetAllServiceOrders {
  private serviceOrderRepository;

  constructor(serviceOrderRepository: ServiceOrderRepository) {
    this.serviceOrderRepository = serviceOrderRepository;
  }

  public async execute(): Promise<serviceOrder[]> {
    return await this.serviceOrderRepository.getAll();
  }
}
