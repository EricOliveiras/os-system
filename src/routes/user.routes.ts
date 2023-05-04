import { Router } from 'express';
import UserController from '../modules/user/controller/UserController';

export const userRouter = Router();

userRouter.post('/create', UserController.createUser);
userRouter.get('/list', UserController.getAll);
userRouter.get('/search/:id', UserController.getUser);
userRouter.put('/update/:id', UserController.update);
userRouter.delete('/delete/:id', UserController.delete);
