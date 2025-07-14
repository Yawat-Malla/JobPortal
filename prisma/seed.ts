import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const roles = [
    'freelancer',
    'client',
    'admin',
    'superadmin',
  ];
  for (const name of roles) {
    await prisma.role.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }
  console.log('Seeded roles:', roles);

  // --- Casbin policies ---
  const { getEnforcer } = await import('../src/lib/casbin');
  const enforcer = await getEnforcer();

  // Remove all existing policies
  await enforcer.clearPolicy();

  // Add basic policies
  // Format: sub, dom, obj, act
  await enforcer.addPolicy('freelancer', 'app', 'job', 'read');
  await enforcer.addPolicy('freelancer', 'app', 'job', 'apply');
  await enforcer.addPolicy('client', 'app', 'job', 'create');
  await enforcer.addPolicy('client', 'app', 'job', 'read');
  await enforcer.addPolicy('admin', 'app', 'admin', 'read');
  await enforcer.addPolicy('superadmin', 'app', 'admin', 'read');
  await enforcer.addPolicy('superadmin', 'app', 'admin', 'write');
  await enforcer.addPolicy('admin', 'app', 'job', 'delete');
  await enforcer.addPolicy('superadmin', 'app', 'job', 'delete');

  // Add role inheritance
  await enforcer.addGroupingPolicy('admin', 'superadmin', 'app'); // superadmin > admin

  await enforcer.savePolicy();
  console.log('Seeded Casbin policies');
}

main().catch(e => {
  console.error(e);
  process.exit(1);
}).finally(() => prisma.$disconnect()); 