"use client";
import { IPostPlant } from "@/app/interface";
import React from "react";

interface FormElements extends HTMLFormControlsCollection {
  plant_name: HTMLInputElement;
  plant_species: HTMLInputElement;
  light_level: HTMLSelectElement;
  water_freq: HTMLInputElement;
  fertilising_freq: HTMLInputElement;
  last_watered: HTMLInputElement;
  note: HTMLTextAreaElement;
}
interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

type AddPlantProps = {
  handleAddPlant: (value: IPostPlant) => void;
};

const AddPlant: React.FC<AddPlantProps> = ({ handleAddPlant }) => {
  const lightOptions = ["HIGH", "MEDIUM", "LOW"];
  // const waterFreqUnitOptions = ["Day(s)", "Week(s)", "Month(s)"];

  const handleSubmit = (event: React.FormEvent<UsernameFormElement>) => {
    event.preventDefault();

    const data = {
      name: event.currentTarget.elements.plant_name.value,
      species: event.currentTarget.elements.plant_species.value,
      lightLevel: event.currentTarget.elements.light_level.value,
      waterCycleValue: Number(event.currentTarget.elements.water_freq.value),
      fertiliserCycleValue: Number(
        event.currentTarget.elements.fertilising_freq.value
      ),
      lastWatered: new Date(event.currentTarget.elements.last_watered.value),
      note: event.currentTarget.elements.note.value,
    };

    handleAddPlant(data);
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center border-solid border-2 border-black mx-28 rounded-xl py-8 text-center min-w-[300px]"
    >
      <h2 className="text-2xl py-4">Add Plant</h2>
      <label htmlFor="plant_name">Name</label>
      <input
        className="border-solid border-2 border-black rounded-md px-1 mb-1"
        id="plant_name"
        name="plant_name"
        type="text"
        placeholder="eg. 'Big red' or 'Doris'"
      />
      <label htmlFor="plant_species">Species</label>
      <input
        className="border-solid border-2 border-black rounded-md px-1 mb-1"
        id="plant_species"
        name="plant_species"
        type="text"
        placeholder="eg 'Orchis italica'"
      />
      <label htmlFor="light_level">Light Level</label>
      <select
        className="border-solid border-2 border-black rounded-md mb-1 text-center"
        id="light_level"
        name="light_level"
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
      <label htmlFor="water_freq">Water Cycle - Days</label>
      {/* <div className="border-solid border-2 border-black rounded-md mb-1 p-px"> */}
      <input
        className="border-solid border-2 border-black rounded-md mb-1 p-px text-center"
        id="water_freq"
        name="water_frequency"
        type="number"
        defaultValue="1"
        min={1}
      />
      <label htmlFor="fertilize_freq">Fertiliser Cycle - Days</label>
      <input
        className="border-solid border-2 border-black rounded-md mb-1 p-px text-center"
        id="fertilize_freq"
        name="fertilising_freq"
        type="number"
        defaultValue="1"
        min={1}
      />
      {/* <select
          id="water_freq_unit"
          name="water_frequency_unit"
          defaultValue="Day(s)"
          >
            {waterFreqUnitOptions.map((waterOption, index) => {
              return (
                <option key={index} value={waterOption}>
                  {waterOption}
                </option>
              );
            })}
          </select>
      {/* </div> */}
      <label htmlFor="last_watered">Last Watered</label>
      <input
        className="border-solid border-2 border-black rounded-md mb-1 text-center"
        id="last_watered"
        name="last_watered"
        type="date"
      ></input>
      <label htmlFor="note">Note</label>
      <textarea
        className="border-solid border-2 border-black rounded-md mb-4 px-2 py-0.5"
        id="note"
        name="note"
        // onKeyDown={enterKey}
      ></textarea>
      <button className="border-solid border-2 border-black rounded-md p-2">
        Add Plant
      </button>
    </form>
  );
};

export default AddPlant;
