import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;

// const main = async () => {
//   const allOwners = await prisma.owner.findMany({
//     where: { id: "1" },
//   });
//   console.log(allOwners);

//   const newOwners = await prisma.owner.create({
//     data: {
//       name: "Alice",
//       email: "alice@prisma.io",
//       plants: {
//         create: [
//           {
//             name: 'Monstera',
//             waterFrequency: 'DAYS',
//             fertiliseFrequency: 'DAYS',
//             lightLevel: 'MEDIUM',
//           },
//         ],
//       },
//     },
//   });
//   console.log(newOwners);
// };

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

