import { Router } from 'express';
import { rootRouter } from './root.routes';
import { userRouter } from './user.routes';

export const router = Router();

router.use('/user', userRouter);
router.use('/', rootRouter);
