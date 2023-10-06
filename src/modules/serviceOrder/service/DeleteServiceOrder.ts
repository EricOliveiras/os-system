import path from 'path';
import fs from 'fs';

import { ServiceOrderRepository } from '../repository/ServiceOrderRepository';
import { HttpException } from '../../../errors/HttpException';

export class DeleteServiceOrder {
  private repository;

  constructor(serviceOrderRepository: ServiceOrderRepository) {
    this.repository = serviceOrderRepository;
  }

  public async execute(id: number): Promise<void> {
    const getServiceOrder = await this.repository.getOne(id);

    if (!getServiceOrder) {
      throw new HttpException(404, 'Service order not found.');
    }

    if (getServiceOrder.imageUrl) {
      const imagePath = path.join(getServiceOrder.imageUrl);

      if (fs.existsSync(imagePath)) {
        fs.unlink(`${getServiceOrder.imageUrl}`, (err) => {
          if (err) {
            throw new HttpException(400, 'Failed to delete the old image.');
          }
        });
      }
    }

    await this.repository.delete(id);
  }
}
