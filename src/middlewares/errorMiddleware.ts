import { HttpException } from '../errors/HttpException';
import { Request, Response, NextFunction } from 'express';

export const errorMiddleware = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof HttpException) {
    return res.status(err.status).send({ message: err.message });
  }

  return next(res.status(500));
};
