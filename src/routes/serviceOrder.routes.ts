import { Router } from 'express';

import { canRequest } from '../middlewares/permissionsMiddleware';
import { authenticated } from '../middlewares/authenticateMiddleware';
import ServiceOrderController from '../modules/serviceOrder/controller/ServiceOrderController';

export const serviceOrder = Router();

serviceOrder.post('/create',
  authenticated,
  canRequest('create:order'),
  ServiceOrderController.create
);

serviceOrder.get('/',
  authenticated,
  canRequest('read:order:list'),
  ServiceOrderController.getAll
);

serviceOrder.get('/my-service-orders',
  authenticated,
  canRequest('read:order:list'),
  ServiceOrderController.getAllByUser
);

serviceOrder.get('/:id',
  authenticated,
  canRequest('read:order'),
  ServiceOrderController.getOne
);

serviceOrder.put('/update/:id',
  authenticated,
  canRequest('update:order'),
  ServiceOrderController.update
);

serviceOrder.delete('/delete/:id',
  authenticated,
  canRequest('delete:order'),
  ServiceOrderController.delete
);
