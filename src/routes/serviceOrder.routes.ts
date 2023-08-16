import { Router } from 'express';

import { canRequest } from '../middlewares/permissionsMiddleware';
import { authenticated } from '../middlewares/authenticateMiddleware';
import ServiceOrderController from '../modules/serviceOrder/controller/ServiceOrderController';

export const serviceOrderRouter = Router();

serviceOrderRouter.post('/create',
  authenticated,
  canRequest('create:order'),
  ServiceOrderController.create
);

serviceOrderRouter.get('/',
  authenticated,
  canRequest('read:order:list'),
  ServiceOrderController.getAll
);

serviceOrderRouter.get('/my-service-orders',
  authenticated,
  canRequest('read:order:list'),
  ServiceOrderController.getAllByUser
);

serviceOrderRouter.get('/:id',
  authenticated,
  canRequest('read:order'),
  ServiceOrderController.getOne
);

serviceOrderRouter.put('/update/:id',
  authenticated,
  canRequest('update:order'),
  ServiceOrderController.update
);

serviceOrderRouter.delete('/delete/:id',
  authenticated,
  canRequest('delete:order'),
  ServiceOrderController.delete
);
