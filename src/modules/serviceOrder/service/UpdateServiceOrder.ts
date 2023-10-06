import { serviceOrder } from '@prisma/client';
import path from 'path';
import fs from 'fs';

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

    if (serviceOrderData.imageUrl && getServiceOrder.imageUrl !== null) {
      const imagePath = path.join(getServiceOrder.imageUrl);

      if (fs.existsSync(imagePath)) {
        fs.unlink(`${getServiceOrder.imageUrl}`, (err) => {
          if (err) {
            throw new HttpException(500, 'Failed to delete the old image.');
          }
        });
      }

      getServiceOrder.imageUrl = serviceOrderData.imageUrl;
    }

    return await this.repository.update(id, serviceOrderData);
  }
}
