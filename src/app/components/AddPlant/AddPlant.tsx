import React from "react";
import { PlantT } from "@/app/types";
import { v4 as uuidv4 } from "uuid";

type AddPlantProps = {
  plants: PlantT[];
  setPlants: (plants: PlantT[]) => void;
};

const AddPlant: React.FC<AddPlantProps> = ({ plants, setPlants }) => {
  const nameRef = React.useRef<HTMLInputElement>(null);
  const plantTypeRef = React.useRef<HTMLInputElement>(null);
  const lightRef = React.useRef<HTMLSelectElement>(null);
  const waterRef = React.useRef<HTMLSelectElement>(null);
  const lastWateredRef = React.useRef<HTMLInputElement>(null)
  const noteRef = React.useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = uuidv4();
    const plantName = nameRef.current?.value || "";
    const plantType = plantTypeRef.current?.value || "";
    const lightLevel = lightRef.current?.value || "";
    const waterFrequency = waterRef.current?.value || "";
    const lastWatered = lastWateredRef.current?.value || ""
    const note = noteRef.current?.value || "";
    const isEditing = false;
    setPlants([
      ...plants,
      { id, isEditing, plantName, plantType, lightLevel, waterFrequency, lastWatered, note },
    ]);

    const refs = [nameRef, lightRef, waterRef, noteRef];
    refs.forEach((ref) => {
      if (ref.current) {
        ref.current.value = "";
      }
    });
  };

  const enterKey = (event: React.KeyboardEvent) => {
    if(!event.shiftKey && event.key === "Enter") {
      event.preventDefault(); 
      handleSubmit(event);
    }
  };

  return (
    <form className="flex flex-col items-center border-solid border-2 border-black mx-28 rounded-xl py-8 text-center min-w-[300px]">
      <h2 className="text-2xl py-4">Add Plant</h2>
      <label htmlFor="plant_name">Plant Name</label>
      <input
        ref={nameRef}
        id="plant_name"
        className="border-solid border-2 border-black rounded-md px-1 mb-1"
        type="text"
        placeholder=""
      />
      <label htmlFor="plant_species">Plant Species</label>
      <input
        ref={plantTypeRef}
        id="plant_species"
        className="border-solid border-2 border-black rounded-md px-1 mb-1"
        type="text"
        placeholder=""
      />
      <label htmlFor="light_level">Light Level</label>
      <select
        className="border-solid border-2 border-black rounded-md mb-1 text-center"
        id="light_level"
        ref={lightRef}
        defaultValue="Light Level"
      >
        <option disabled value="">
          Light Level
        </option>
        <option value="Bright Light">Bright Light</option>
        <option value="Indirect Light">Indirect Light</option>
        <option value="Low Light">Low Light</option>
      </select>
      <label htmlFor="water_freq">Water Frequency</label>
      <select
        className="border-solid border-2 border-black rounded-md mb-1 text-center"
        id="water_freq"
        ref={waterRef}
        defaultValue="Water Frequency"
      >
        <option disabled value="">
          Water Frequency
        </option>
        <option value="Every 7 days">Every 7 days</option>
        <option value="Every 14 days">Every 14 days</option>
        <option value="Every 30 days">Every 30 days</option>
      </select>
      <label htmlFor="last_watered">Last Watered</label>
      <input className="border-solid border-2 border-black rounded-md mb-1 text-center" ref={lastWateredRef} type="date" id="last_watered" name="last_watered"></input>
      <label htmlFor="note">Note</label>
      <textarea
        className="border-solid border-2 border-black rounded-md mb-4 px-2 py-0.5"
        id="note"
        ref={noteRef}
        onKeyDown={enterKey}
      ></textarea>
      <button
        className="border-solid border-2 border-black rounded-md p-2"
        onClick={handleSubmit}
      >
        Add Plant
      </button>
    </form>
  );
};

export default AddPlant;
