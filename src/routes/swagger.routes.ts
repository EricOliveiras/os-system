import { Router } from 'express';

import swaggerController from '../swagger/swaggerController';

export const swaggerRouter = Router();

swaggerRouter.get('/', swaggerController.swagger);
swaggerRouter.get('/docs', swaggerController.docs);
