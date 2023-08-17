import { serviceOrder } from '@prisma/client';

import { IServiceOrderRequest } from './IServiceOrderRequest';

export interface IServiceOrderRepository {
  create({ userId, requester, problemDescription }: IServiceOrderRequest): Promise<serviceOrder>;
  getOne(id: number): Promise<serviceOrder | null>;
  getAll(): Promise<serviceOrder[]>;
  getAllByUser(userId: string): Promise<serviceOrder[]>;
  update(id: number, serviceOrder: Partial<serviceOrder>): Promise<serviceOrder>;
  delete(id: number): Promise<void>;
}
