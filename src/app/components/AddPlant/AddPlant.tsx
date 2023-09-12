"use client";
import React from "react";
import { IPlant } from "@/app/types";
import { v4 as uuidv4 } from "uuid";
import prisma from "../../../../prisma/prisma";

type AddPlantProps = {
  // plants: IPlant[];
  handleAddPlant: (value: FormData) => void;
};

const AddPlant: React.FC<AddPlantProps> = ({ handleAddPlant }) => {
  // const nameRef = React.useRef<HTMLInputElement>(null);
  // const plantTypeRef = React.useRef<HTMLInputElement>(null);
  // const lightRef = React.useRef<HTMLSelectElement>(null);
  // const waterRefInt = React.useRef<HTMLInputElement>(null);
  // const waterRefUnit = React.useRef<HTMLSelectElement>(null);
  // const lastWateredRef = React.useRef<HTMLInputElement>(null);
  // const noteRef = React.useRef<HTMLTextAreaElement>(null);

  // const lightOptions = ["Bright Light", "Indirect Light", "Low Light"];
  // const waterFreqUnitOptions = ["Day(s)", "Week(s)", "Month(s)"];

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   const plantName = nameRef.current?.value || "";
  // const plantType = plantTypeRef.current?.value || "";
  // const lightLevel = lightRef.current?.value || "";
  // const waterFrequencyInt = waterRefInt.current?.value || "";
  // const waterFrequencyUnit = waterRefUnit.current?.value || "";
  // const lastWatered = lastWateredRef.current?.value || "";
  // const note = noteRef.current?.value || "";
  // const isEditing = false;
  // setPlants([
  //   ...plants,
  //   {
  //     id,
  //     isEditing,
  //     plantName,
  //     plantType,
  //     lightLevel,
  //     waterFrequencyUnit,
  //     waterFrequencyInt,
  //     lastWatered,
  //     note,
  //   },
  // ]);

  // const handleSubmit = (event: React.FormEvent) => {

  // }

  //   const refs = [nameRef, plantTypeRef, noteRef];
  //   refs.forEach((ref) => {
  //     if (ref.current) {
  //       ref.current.value = "";
  //     }
  //   });
  //   if (waterRefInt.current && waterRefUnit.current && lastWateredRef.current) {
  //     waterRefInt.current.value = "1";
  //     waterRefUnit.current.value = "Day(s)";
  //     lastWateredRef.current.value = "yyyy-mm-dd";
  //   }
  // };

  // const enterKey = (event: React.KeyboardEvent) => {
  //   if (!event.shiftKey && event.key === "Enter") {
  //     event.preventDefault();
  //     handleSubmit(event);
  //   }
  // };

  const handleSubmit = () => {
    console.log()
  }

  return (
    <>
    {/* <button
    onClick={() => {
      console.log("button clicked");
      handleAddPlant();
    }}
  >
    Click me
  </button> */}
    <form onSubmit={handleSubmit} className="flex flex-col items-center border-solid border-2 border-black mx-28 rounded-xl py-8 text-center min-w-[300px]">
    
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
        {lightOptions.map((lightOption, index) => {
          return (
            <option key={index} value={lightOption}>
              {lightOption}
            </option>
          );
        })}
      </select>
      <label htmlFor="water_freq">Watering interval</label>
      <div className="border-solid border-2 border-black rounded-md mb-1 p-px">
        <input
          type="number"
          className="text-center"
          ref={waterRefInt}
          defaultValue="1"
          min={1}
        />
        <select ref={waterRefUnit} defaultValue="Day(s)">
          {waterFreqUnitOptions.map((waterOption, index) => {
            return (
              <option key={index} value={waterOption}>
                {waterOption}
              </option>
            );
          })}
        </select>
      </div>
      <label htmlFor="last_watered">Last Watered</label>
      <input
        className="border-solid border-2 border-black rounded-md mb-1 text-center"
        ref={lastWateredRef}
        type="date"
        id="last_watered"
        name="last_watered"
      ></input>
      <label htmlFor="note">Note</label>
      <textarea
        className="border-solid border-2 border-black rounded-md mb-4 px-2 py-0.5"
        id="note"
        ref={noteRef}
        // onKeyDown={enterKey}
      ></textarea>
      <button
        className="border-solid border-2 border-black rounded-md p-2"
        onClick={handleSubmit}
      >
        Add Plant
      </button>
    </form>
    </>
  );
};

export default AddPlant;
