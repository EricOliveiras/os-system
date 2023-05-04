import { Role } from '@prisma/client';

export const roles: Role[] = [
  {
    id: 1,
    type: 'admin',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    type: 'user',
    createdAt: new Date(),
    updatedAt: new Date()
  },
];
