"use client";
import prisma from "../../../../prisma/prisma";

const TestCards = () => {
  const handlePlants = async () => {
    const plants = await fetch("/api/user");
    console.log(plants);
  };

  return (
    <div>
      <button onClick={handlePlants}>Click Me</button>
    </div>
  );
};

export default TestCards;
