"use client";
import React from "react";
import Link from "next/link";
import PlantGallery from "./components/PlantGallery/PlantGallery";
import { getPlants } from "./api/plant/route";
import { IPlant } from "./interface";

const Home = () => {
  const [plants, setPlants] = React.useState<IPlant[]>([]);

  React.useEffect(() => {
    (async () => {
      const plants = await getPlants();
      setPlants(plants);
    })();
  }, []);

  return (
    <>
      <h1 className="text-3xl text-center py-8">HOME_BIZ</h1>
      <Link href="/addplant">Add Plant</Link>
      <PlantGallery plants={plants} />
    </>
  );
};

export default Home;
