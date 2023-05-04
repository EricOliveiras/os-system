import { Router, Request, Response } from 'express';

export const rootRouter = Router();

rootRouter.use('/', (request: Request, response: Response) => {
  response.send('OS System Api');
});
