import { Router } from 'express';

import { rootRouter } from './root.routes';
import { userRouter } from './user.routes';
import { authRouter } from './authenticate.routes';
import { serviceOrder } from './serviceOrder.routes';

export const router = Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/service-order', serviceOrder);
router.use('/', rootRouter);
