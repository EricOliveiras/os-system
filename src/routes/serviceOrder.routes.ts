import { Router } from 'express';

import { canRequest } from '../middlewares/permissionsMiddleware';
import { authenticated } from '../middlewares/authenticateMiddleware';
import ServiceOrderController from '../modules/serviceOrder/controller/ServiceOrderController';
import upload from '../config/multer';

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

serviceOrderRouter.post('/order/image',
  authenticated,
  canRequest('read:order'),
  ServiceOrderController.getImage
);

serviceOrderRouter.put('/update/:id',
  authenticated,
  canRequest('update:order'),
  upload.single('file'),
  ServiceOrderController.update
);

serviceOrderRouter.delete('/delete/:id',
  authenticated,
  canRequest('delete:order'),
  ServiceOrderController.delete
);
