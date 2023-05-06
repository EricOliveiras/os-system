import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

import { saltRounds } from '../../src/config/vars';
import { permission_role, permissions, roles } from './data';

const prisma = new PrismaClient();

const main = async () => {
  console.log('> Seeding database...');

  try {
    await prisma.role.createMany({
      data: roles,
      skipDuplicates: true,
    });

    await prisma.permission.createMany({
      data: permissions,
      skipDuplicates: true,
    });

    await prisma.permission_Role.createMany({
      data: permission_role,
      skipDuplicates: true,
    });

    const admin = await prisma.user.upsert({
      where: {
        username: 'admin'
      },
      update: {},
      create: {
        username: 'admin',
        fullname: 'admin',
        password: await hash('admin', saltRounds),
        roleId: 1
      },
    });

    await prisma.user_Role.createMany({
      data: {
        role_id: admin.roleId,
        user_id: admin.id
      },
      skipDuplicates: true
    });

  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

main();
