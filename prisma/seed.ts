import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.plant.createMany({
    data: [
      {
      name: "Monstera",
      waterFrequency: "DAYS",
      fertiliseFrequency: "DAYS",
      lightLevel: "MEDIUM",
      createdAt: new Date(),
      ownerId: '1',
    },
    {
      name: "Bird of Paradise",
      waterFrequency: "DAYS",
      fertiliseFrequency: "DAYS",
      lightLevel: "MEDIUM",
      createdAt: new Date(),
      ownerId: '1',
    },

  ]
  });
};

main()
.then (async () => {
  await prisma.$disconnect();
})
.catch (async (e) => {
  throw e;
  await prisma.$disconnect();
  process.exit(1);
});