import { Router } from 'express';

import UserController from '../modules/user/controller/UserController';
import { canRequest } from '../middlewares/permissionsMiddleware';
import { authenticated } from '../middlewares/authenticateMiddleware';

export const userRouter = Router();

userRouter.post('/create',
  authenticated,
  canRequest('create:user'),
  UserController.createUser
);

userRouter.get('/list',
  authenticated,
  canRequest('read:user:list'),
  UserController.getAll
);

userRouter.get('/search/:id',
  authenticated,
  canRequest('read:user'),
  UserController.getUser
);

userRouter.put('/update/:id',
  authenticated,
  canRequest('update:user'),
  UserController.update
);

userRouter.put('/update/password/:id',
  authenticated,
  canRequest('update:user'),
  UserController.updatePassword
);

userRouter.delete('/delete/:id',
  authenticated,
  canRequest('delete:user'),
  UserController.delete
);
