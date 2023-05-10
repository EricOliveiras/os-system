import { ServiceOrderRepository } from '../repository/ServiceOrderRepository';
import { HttpException } from '../../../errors/HttpException';

export class DeleteServiceOrder {
  private repository;

  constructor(serviceOrderRepository: ServiceOrderRepository) {
    this.repository = serviceOrderRepository;
  }

  public async execute(id: string): Promise<void> {
    const getServiceOrder = await this.repository.getOne(id);

    if (!getServiceOrder) {
      throw new HttpException(404, 'Service order not found.');
    }

    await this.repository.delete(id);
  }
}
