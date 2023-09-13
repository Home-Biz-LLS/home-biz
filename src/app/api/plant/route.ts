"use server";
import prisma from "../../../../prisma/prisma";

const getPlants = async () => {
  return await prisma.plant.findMany({where : {ownerId : "1"}})
}

const addPlant = async (newPlant: any) => {
  return await prisma.plant.create(newPlant);
}

export { getPlants, addPlant };