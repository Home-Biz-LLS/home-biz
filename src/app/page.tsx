"use client";
import React from "react";
import { IPlant } from "./types";
import AddPlant from "./components/AddPlant/AddPlant";
import PlantGallery from "./components/PlantGallery/PlantGallery";
import { useQuery, useMutation } from "@tanstack/react-query";
import prisma from "../../prisma/prisma";
import TestOwner from "./components/PlantGallery/TestOwner";
import TestPlant from "./components/PlantGallery/TestPlant";
import axios from "axios";
// import create from "./api/apiHandlers";
import testPost  from "./api/plant/route"

const Home = () => {
  const [plants, setPlants] = React.useState<IPlant[]>([]);

  React.useEffect(() => {
    async () => {
      const plants = await prisma.plant.findMany({ where: { ownerId: "1" } });
      console.log(plants);
      setPlants(plants);
    };
  }, [plants]);

  const handleAddPlant = async (Formdata: any) => {
    console.log("in handleAdd")
    const res = await testPost({data: {
      name: 'big red thing',
      waterFrequency: 'DAYS',
      lightLevel: 'HIGH',
      fertiliseFrequency: 'DAYS',
      ownerId: '1'
    }});
    console.log(res);
  };

  return (
    <>
      <h1 className="text-3xl text-center py-8">This is HOME_BIZ</h1>
      {/* <button onClick={() => mutation.mutate()}>Add new Owner</button> */}
      <AddPlant handleAddPlant={handleAddPlant} />
      <PlantGallery plants={plants} />
      {/* <TestOwner />
      <TestPlant /> */}
    </>
  );
};

export default Home;
