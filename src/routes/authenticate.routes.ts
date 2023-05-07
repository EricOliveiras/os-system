import { Router } from 'express';

import AuthController from '../modules/user/controller/AuthController';

export const authRouter = Router();

authRouter.post('/login', AuthController.login);

