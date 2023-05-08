import { Response, NextFunction, Request } from 'express';
import { verify } from 'jsonwebtoken';

import { jwtSecret } from '../config/vars';
import { HttpException } from './../errors/HttpException';

export const authenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new HttpException(400, 'Missing auth header');
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = <{ user_id: string, permissions: string[] }>verify(token, jwtSecret);

    req.user = {
      user_id: payload.user_id,
      permissions: payload.permissions
    };

    return next();
  } catch {
    throw new HttpException(401, 'Invalid token');
  }
};
