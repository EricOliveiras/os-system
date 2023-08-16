import { Router } from 'express';

import { rootRouter } from './root.routes';
import { userRouter } from './user.routes';
import { authRouter } from './authenticate.routes';
import { serviceOrderRouter } from './serviceOrder.routes';
import { swaggerRouter } from './swagger.routes';

export const router = Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/service-order', serviceOrderRouter);
router.use('/swagger', swaggerRouter);
router.use('/', rootRouter);
