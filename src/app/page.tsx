"use client";
import Image from "next/image";
import { useRef } from "react";

type PlantT = {
  plantName: string;
};

const Home = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const plants: PlantT[] = [];
  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    const plantName = nameRef.current?.value || " ";
    plants.push({ plantName });
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
          <li>
            <div>
              {/* <h2>{plants[0].plantName}</h2> */}
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Home;
