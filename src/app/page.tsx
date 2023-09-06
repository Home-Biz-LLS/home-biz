"use client";
import Image from "next/image";
import { PlantT } from "./types";
import React from "react";

const Home = () => {
  const [plants, setPlants] = React.useState<PlantT[]>([]);


  const nameRef = React.useRef<HTMLInputElement>(null);
  const lightRef = React.useRef<HTMLSelectElement>(null)
  const waterRef = React.useRef<HTMLSelectElement>(null)

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    const plantName = nameRef.current?.value || "";
    const lightLevel = lightRef.current?.value || ""
    const waterFrequency = waterRef.current?.value || ""
    setPlants([...plants, { plantName, lightLevel, waterFrequency }]);
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
        <select ref={lightRef} defaultValue="Light Level">
          <option disabled value="">Light Level</option>
          <option value="Bright Light">Bright Light</option>
          <option value="Indirect Light">Indirect Light</option>
          <option value="Low Light">Low Light</option>
        </select>
        <select ref={waterRef} defaultValue="Water Frequency">
          <option disabled value="">Water Frequency</option>
          <option value="Every 7 days">Every 7 days</option>
          <option value="Every 14 days">Every 14 days</option>
          <option value="Every 30 days">Every 30 days</option>
        </select>
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
