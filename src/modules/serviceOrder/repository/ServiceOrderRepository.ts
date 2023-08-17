import { serviceOrder } from '@prisma/client';

import { IServiceOrderRepository } from '../interface/IServiceOrderRepository';
import { IServiceOrderRequest } from '../interface/IServiceOrderRequest';
import { prisma as db } from '../../../config/prisma';

export class ServiceOrderRepository implements IServiceOrderRepository {
  public async create({ userId, requester, problemDescription }: IServiceOrderRequest): Promise<serviceOrder> {
    return await db.serviceOrder.create({
      data: {
        userId,
        requester,
        problemDescription
      }
    });
  }

  public async getOne(id: number): Promise<serviceOrder | null> {
    return await db.serviceOrder.findUnique({
      where: { id }
    });
  }

  public async getAll(): Promise<serviceOrder[]> {
    return await db.serviceOrder.findMany();
  }

  public async getAllByUser(userId: string): Promise<serviceOrder[]> {
    return await db.serviceOrder.findMany({
      where: { userId: userId }
    });
  }

  public async update(id: number, serviceOrder: Partial<serviceOrder>): Promise<serviceOrder> {
    return await db.serviceOrder.update({
      where: { id },
      data: serviceOrder
    });
  }

  public async delete(id: number): Promise<void> {
    await db.serviceOrder.delete({
      where: { id }
    });
  }
}
