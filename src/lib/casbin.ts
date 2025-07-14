import { newEnforcer, newModel, Enforcer } from 'casbin';
import { PrismaAdapter } from 'casbin-prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
let enforcer: Enforcer | null = null;

const modelText = `
[request_definition]
r = sub, dom, obj, act

[policy_definition]
p = sub, dom, obj, act

[role_definition]
g = _, _, _

[policy_effect]
e = some(where (p.eft == allow))

[matchers]
m = g(r.sub, p.sub, r.dom) && r.dom == p.dom && r.obj == p.obj && r.act == p.act
`;

export async function getEnforcer() {
  if (enforcer) return enforcer;

  const adapter = await PrismaAdapter.newAdapter(prisma);
  const model = newModel(modelText); // Load model from string
  enforcer = await newEnforcer(model, adapter);

  return enforcer;
}

export async function enforce(sub: string, dom: string, obj: string, act: string): Promise<boolean> {
  const e = await getEnforcer();
  return e.enforce(sub, dom, obj, act);
}
  