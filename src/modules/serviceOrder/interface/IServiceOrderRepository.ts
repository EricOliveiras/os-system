import { serviceOrder } from '@prisma/client';

import { IServiceOrderRequest } from './IServiceOrderRequest';

export interface IServiceOrderRepository {
  create({ userId, requester, problemDescription }: IServiceOrderRequest): Promise<serviceOrder>;
  getOne(id: string): Promise<serviceOrder | null>;
  getAll(): Promise<serviceOrder[]>;
  getAllByUser(userId: string): Promise<serviceOrder[]>;
  update(id: string, serviceOrder: Partial<serviceOrder>): Promise<serviceOrder>;
  delete(id: string): Promise<void>;
}
