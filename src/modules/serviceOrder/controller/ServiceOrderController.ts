import { Request, Response } from 'express';

import { ServiceOrderRepository } from '../repository/ServiceOrderRepository';
import { CreateOrderService } from '../service/CreateServiceOrder';
import { UserRepository } from '../../user/repository/UserResository';
import { GetAllServiceOrders } from '../service/GetAllServiceOrders';
import { GetServiceOrderByUser } from '../service/GetServiceOrderByUser';
import { GetServiceOrder } from '../service/GetServiceOrder';
import { UpdateServiceOrder } from '../service/UpdateServiceOrder';
import { serviceOrder } from '@prisma/client';
import { DeleteServiceOrder } from '../service/DeleteServiceOrder';

const userRepository = new UserRepository();
const serviceOrderRepository = new ServiceOrderRepository();

export default {
  async create(request: Request, response: Response) {
    const userId = <string>request.user?.user_id;

    const { requester, problemDescription } = request.body;

    const serviceOrder = new CreateOrderService(serviceOrderRepository, userRepository);

    const createServiceOrder = await serviceOrder.execute({
      userId,
      requester,
      problemDescription
    });

    return response.status(201).json({
      error: false,
      message: 'Success: Successfully created service order.',
      serviceOrder: createServiceOrder
    });
  },

  async getAll(request: Request, response: Response) {
    const getServiceOrders = new GetAllServiceOrders(serviceOrderRepository);

    const serviceOrders = await getServiceOrders.execute();

    return response.status(200).json({
      error: false,
      message: 'Success in searching for service orders.',
      serviceOrders
    });
  },

  async getAllByUser(request: Request, response: Response) {
    const userId = <string>request.user?.user_id;

    const getServiceOrders = new GetServiceOrderByUser(serviceOrderRepository, userRepository);

    const serviceOrders = await getServiceOrders.execute(userId);

    return response.status(200).json({
      error: false,
      message: 'Success in searching for service orders.',
      serviceOrders
    });
  },

  async getOne(request: Request, response: Response) {
    const { id } = request.params;

    const getServiceOrder = new GetServiceOrder(serviceOrderRepository);

    const serviceOrder = await getServiceOrder.execute(id);

    return response.status(200).json({
      error: false,
      message: 'Success in searching for service order.',
      serviceOrder
    });
  },

  async update(request: Request, response: Response) {
    const { id } = request.params;

    const data: Partial<serviceOrder> = request.body;

    const serviceOrder = new UpdateServiceOrder(serviceOrderRepository);

    const updateServiceOrder = await serviceOrder.execute(id, data);

    return response.status(200).json({
      error: false,
      message: 'Success in updating service order.',
      serviceOrder: updateServiceOrder
    });
  },

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const serviceOrder = new DeleteServiceOrder(serviceOrderRepository);

    await serviceOrder.execute(id);

    return response.status(200).json({
      error: false,
      message: 'Success in deleting service order.',
    });
  }
};
