import React from "react";
import prisma from "../../../../prisma/prisma";

const TestPlant = async () => {
  const plants = await prisma.plant.findMany({ where: { ownerId: "1" } });

  return (
    <section>
      {plants.map((plant) => {
        return <article key={plant.id}>
          <h2>{plant.name}</h2>
          <p>{plant.waterFrequency}</p>
          <p>{plant.lightLevel}</p>
          <p>{plant.fertiliseFrequency}</p>
          <p>{plant.createdAt.toString()}</p>
        </article>;
      })}
    </section>
  );
};

export default TestPlant;
