'use client'
import React from "react";
import { PlantT } from "./types";
import AddPlant from "./components/AddPlant/AddPlant";
import PlantGallery from "./components/PlantGallery/PlantGallery";
const Home = () => {
  const [plants, setPlants] = React.useState<PlantT[]>([]);

  return (
    <>
      <h1 className="text-3xl text-center py-8">This is HOME_BIZ</h1>
      <AddPlant plants={plants} setPlants={setPlants}/>
      <PlantGallery plants={plants} setPlants={setPlants}/>
    </>
  );
};

export default Home;
