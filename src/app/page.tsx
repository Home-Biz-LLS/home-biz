"use client";
import React from "react";
import { PlantT } from "./types";
import AddPlant from "./components/AddPlant/AddPlant";
import PlantGallery from "./components/PlantGallery/PlantGallery";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import GetOwner from "./components/PlantGallery/TestCards";

const Home = () => {
  const [plants, setPlants] = React.useState<PlantT[]>([]);
  // const mutation = useMutation((newOwner) =>
  //   axios.post("/api/newOwner", newOwner)
  // );

  return (
    <>
      <h1 className="text-3xl text-center py-8">This is HOME_BIZ</h1>
      {/* <button onClick={() => mutation.mutate()}>Add new Owner</button> */}
      <AddPlant plants={plants} setPlants={setPlants} />
      <PlantGallery plants={plants} setPlants={setPlants} />
      <GetOwner />
    </>
  );
};

export default Home;
