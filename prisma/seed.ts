import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();
// モデル投入用のデータ定義
const userData: Prisma.UserCreateInput[] = [
  {
    name: 'User1',
    email: 'user1@example.com',
    password: 'password',
  },
  {
    name: 'User2',
    email: 'user2@example.com',
    password: 'password',
  },
  {
    name: 'User3',
    email: 'user3@example.com',
    password: 'password',
  },
];
const transfer = async () => {
  const users = [];
  for (const u of userData) {
    const user = prisma.user.create({
      data: u,
    });
    users.push(user);
  }
  return await prisma.$transaction(users);
};
// 定義されたデータを実際のモデルへ登録する処理
const main = async () => {
  console.log(`Start seeding ...`);
  await transfer();
  console.log(`Seeding finished.`);
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
