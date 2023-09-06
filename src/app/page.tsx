"use client";
import Image from "next/image";
import { PlantT } from "./types";
import React from "react";

const Home = () => {
  const [plants, setPlants] = React.useState<PlantT[]>([]);

  const nameRef = React.useRef<HTMLInputElement>(null);

  // const plants: PlantT[] = [];

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    const plantName = nameRef.current?.value || " ";
    setPlants([...plants, { plantName }]);
    console.log(plants);
  };

  return (
    <>
      <h1>This is HOME_BIZ</h1>
      <form>
        <label htmlFor="plant_name">Plant Name</label>
        <input
          ref={nameRef}
          id="plant_name"
          type="text"
          placeholder="plant name"
        />
        <button onClick={handleClick}>Add Plant</button>
      </form>
      <section>
        <ul>
          {plants.map((plant, index) => {
            return (
              <li key={index}>
                <h2>{plant.plantName}</h2>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  );
};

export default Home;
