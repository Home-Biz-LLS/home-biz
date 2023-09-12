import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";

export default async function POST(newPlant: any) {
  console.log("in post req");
  const addPlant = await prisma.plant.create(newPlant);
  return NextResponse.json(addPlant); // 404
  // res.status(404).json({ message: "Not found" });
}
