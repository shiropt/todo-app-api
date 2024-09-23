import { PrismaClient } from '@prisma/client';
import { generateTodos } from './todo';
import { userNames } from './user';
const prisma = new PrismaClient();
async function main() {
  userNames.forEach(async (name) => {
    await prisma.user.create({
      data: {
        name,
        email: `${name.toLowerCase()}@example.io`,
        todos: { create: generateTodos({ name, length: 5 }) },
      },
    });
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
