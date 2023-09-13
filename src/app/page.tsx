"use client";
import React from "react";
import { IPostPlant, IPlant } from "./interface";
import AddPlant from "./components/AddPlant/AddPlant";
import PlantGallery from "./components/PlantGallery/PlantGallery";
import { useQuery, useMutation } from "@tanstack/react-query";
import prisma from "../../prisma/prisma";
import TestOwner from "./components/PlantGallery/TestOwner";
import TestPlant from "./components/PlantGallery/TestPlant";
import axios from "axios";
import { addPlant, getPlants } from "./api/plant/route";

const Home = () => {
  const [plants, setPlants] = React.useState<IPlant[]>([]);

  React.useEffect(() => {
    (async () => {
      const plants = await getPlants();
      setPlants(plants);
    })();
  }, []);

  const handleAddPlant = async (data: IPostPlant) => {
    console.log("in handleAdd");
    console.log(data);
    const res = await addPlant({
      data: {
        ownerId: "1",
        ...data,
      },
    });
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
