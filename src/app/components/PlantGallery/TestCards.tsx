import prisma from "../../../../prisma/prisma";

const TestCards = async () => {
  const plants = await prisma.plant.findMany();

  return (
    // <div>
    //   {plants.map((plant, index) => {
    //     <li key={index}>{plant.name}</li>
    //   })}
    // </div>
  )
}

export default TestCards