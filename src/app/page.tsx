'use client'
import React from "react";
import { PlantT } from "./types";
import AddPlant from "./components/AddPlant/AddPlant";
import PlantCard from "./components/PlantCard/PlantCard";

const Home = () => {
  const [plants, setPlants] = React.useState<PlantT[]>([]);

  return (
    <>
      <h1 className="text-3xl text-center py-8">This is HOME_BIZ</h1>
      <AddPlant plants={plants} setPlants={setPlants}/>
      <PlantCard plants={plants} setPlants={setPlants}/>
    </>
  );
};

export default Home;
