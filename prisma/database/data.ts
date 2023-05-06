import { Permission, Permission_Role, Role } from '@prisma/client';

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

export const permissions: Permission[] = [
  {
    id: 1,
    name: 'create:user',
    description: null,
    created_at: new Date(),
  },
  {
    id: 2,
    name: 'read:user',
    description: null,
    created_at: new Date(),
  },
  {
    id: 3,
    name: 'read:user:list',
    description: null,
    created_at: new Date(),
  },
  {
    id: 4,
    name: 'update:user',
    description: null,
    created_at: new Date(),
  },
  {
    id: 5,
    name: 'delete:user',
    description: null,
    created_at: new Date(),
  },
  {
    id: 6,
    name: 'create:order',
    description: null,
    created_at: new Date(),
  },
  {
    id: 7,
    name: 'read:order',
    description: null,
    created_at: new Date(),
  },
  {
    id: 8,
    name: 'read:order:list',
    description: null,
    created_at: new Date(),
  },
  {
    id: 9,
    name: 'update:order',
    description: null,
    created_at: new Date(),
  },
  {
    id: 10,
    name: 'delete:order',
    description: null,
    created_at: new Date(),
  }
];

export const permission_role: Permission_Role[] = [
  { role_id: 1, permission_id: 1 },
  { role_id: 1, permission_id: 2 },
  { role_id: 1, permission_id: 3 },
  { role_id: 1, permission_id: 4 },
  { role_id: 1, permission_id: 5 },
  { role_id: 1, permission_id: 6 },
  { role_id: 1, permission_id: 7 },
  { role_id: 1, permission_id: 8 },
  { role_id: 1, permission_id: 9 },
  { role_id: 1, permission_id: 10 },
  { role_id: 2, permission_id: 6 },
  { role_id: 2, permission_id: 7 },
  { role_id: 2, permission_id: 8 },
  { role_id: 2, permission_id: 9 }
];
