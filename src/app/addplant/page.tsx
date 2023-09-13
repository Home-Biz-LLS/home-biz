"use client";
import React from "react";
import { IPostPlant } from "@/app/interface";
import { addPlant } from "@/app/api/plant/route";
import Link from "next/link";

interface FormElements extends HTMLFormControlsCollection {
  plant_name: HTMLInputElement;
  plant_species: HTMLInputElement;
  light_level: HTMLSelectElement;
  water_cycle_value: HTMLInputElement;
  water_cycle: HTMLSelectElement;
  fertiliser_cycle_value: HTMLInputElement;
  fertiliser_cycle: HTMLSelectElement;
  last_watered: HTMLInputElement;
  note: HTMLTextAreaElement;
}
interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const AddPlant = () => {
  const lightLevel = ["High", "Medium", "Low"];
  const cycleUnit = ["Day", "Week", "Month"];

  const handleAddPlant = async (data: IPostPlant) => {
    console.log(data);
    const res = await addPlant({
      data: {
        ownerId: "1",
        ...data,
      },
    });
    console.log(res);
  };

  const handleSubmit = (event: React.FormEvent<UsernameFormElement>) => {
    event.preventDefault();

    const data = {
      name: event.currentTarget.elements.plant_name.value,
      species: event.currentTarget.elements.plant_species.value,
      lightLevel: event.currentTarget.elements.light_level.value,
      waterCycleValue: Number(
        event.currentTarget.elements.water_cycle_value.value
      ),
      waterCycle: event.currentTarget.elements.water_cycle.value,
      fertiliserCycleValue: Number(
        event.currentTarget.elements.fertiliser_cycle_value.value
      ),
      fertiliserCycle: event.currentTarget.elements.fertiliser_cycle.value,
      lastWatered: new Date(event.currentTarget.elements.last_watered.value),
      note: event.currentTarget.elements.note.value,
    };

    handleAddPlant(data);
    console.log(data);
  };

  return (
    <>
      <Link href="/">
        <h1 className="text-3xl text-center py-8">HOME_BIZ</h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col place-content-evenly gap-2 items-center border-solid border-2 border-black mx-28 rounded-xl py-8 text-center min-w-[300px]"
      >
        <h2 className="text-2xl py-4">Add Plant</h2>
        <label htmlFor="plant_name">Name</label>
        <input
          className="border-solid border-2 border-zinc-300 rounded-md px-1 mb-1"
          id="plant_name"
          name="plant_name"
          type="text"
          placeholder="eg. 'Big red' or 'Doris'"
        />

        <label htmlFor="plant_species">Species</label>
        <input
          className="border-solid border-2 border-zinc-300 rounded-md px-1 mb-1"
          id="plant_species"
          name="plant_species"
          type="text"
          placeholder="eg 'Orchis italica'"
        />

        <label htmlFor="light_level">Light Level</label>
        <select
          className="border-solid border-2 border-zinc-300 rounded-md mb-1 text-center"
          id="light_level"
          name="light_level"
        >
          {/* <option value="Select light level" disabled>
            Select light level
          </option> */}
          {lightLevel.map((lightOption, index) => {
            return (
              <option key={index} value={lightOption}>
                {lightOption}
              </option>
            );
          })}
        </select>

        <label htmlFor="water_cycle">Water Cycle</label>
        <input
          className="border-solid border-2 border-zinc-300 rounded-md mb-1 p-px text-center"
          id="water_cycle_value"
          name="water_cycle_value"
          type="number"
          placeholder="How long should I water?"
          // defaultValue="1"
          min={1}
        />
        <select
          id="water_cycle"
          name="water_cycle"
          className="border-solid border-2 border-zinc-300 rounded-md px-1 mb-1"
        >
          {cycleUnit.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>

        <label htmlFor="fertiliser_cycle">Fertiliser Cycle</label>
        <input
          className="border-solid border-2 border-zinc-300 rounded-md mb-1 p-px text-center"
          id="fertiliser_cycle_value"
          name="fertiliser_cycle_value"
          type="number"
          placeholder="How long should I fertilise?"
          min={1}
        />
        <select
          id="fertiliser_cycle"
          name="fertiliser_cycle"
          defaultValue="Day"
          className="border-solid border-2 border-zinc-300 rounded-md px-1 mb-1"
        >
          {cycleUnit.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>

        <label htmlFor="last_watered">Last Watered</label>
        <input
          className="border-solid border-2 border-zinc-300 rounded-md mb-1 text-center"
          id="last_watered"
          name="last_watered"
          type="date"
        ></input>
        <label htmlFor="note">Note</label>
        <textarea
          className="border-solid border-2 border-zinc-300 rounded-md mb-4 px-2 py-0.5"
          id="note"
          name="note"
        ></textarea>

        <button className="border-solid border-2 border-black rounded-md p-2">
          Add Plant
        </button>
      </form>
    </>
  );
};

export default AddPlant;
