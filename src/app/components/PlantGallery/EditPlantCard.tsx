import React from "react";
// import { PlantT } from "@/app/types";

type EditPlantCardProps = {
  nameRef: React.RefObject<HTMLInputElement>;
  plantTypeRef: React.RefObject<HTMLInputElement>;
  lightRef: React.RefObject<HTMLSelectElement>;
  waterRefInt: React.RefObject<HTMLInputElement>;
  waterRefUnit: React.RefObject<HTMLSelectElement>;
  lastWateredRef: React.RefObject<HTMLInputElement>;
  noteRef: React.RefObject<HTMLTextAreaElement>;
  // plant: PlantT;
  statusEdit: (value: boolean) => void;
  handleUpdatePlant: (id: string) => void;
};

const lightOptions = ["Bright Light", "Indirect Light", "Low Light"];
const waterFreqUnitOptions = ["Day(s)", "Week(s)", "Month(s)"];

const EditPlantCard: React.FC<EditPlantCardProps> = ({
  nameRef,
  plantTypeRef,
  lightRef,
  waterRefInt,
  waterRefUnit,
  lastWateredRef,
  noteRef,
  // plant,
  statusEdit,
  handleUpdatePlant,
}) => {
  return (
    <>
      {/* <label htmlFor="plant_name">Plant Name</label>
      <input
        id="plant_name"
        className="border-solid border-2 border-black rounded-md px-1 mb-1"
        ref={nameRef}
        type="text"
        placeholder=""
        defaultValue={plant.plantName}
      />
      <label htmlFor="plant_species">Plant Species</label>
      <input
        ref={plantTypeRef}
        id="plant_species"
        className="border-solid border-2 border-black rounded-md px-1 mb-1"
        type="text"
        defaultValue={plant.plantType}
        placeholder=""
      />
      <select
        className="text-center border-solid border-2 border-black rounded-md mb-1"
        ref={lightRef}
        defaultValue={plant.lightLevel}
      >
        {lightOptions.map((lightOption, index) => {
          return (
            <option key={index} value={lightOption}>
              {lightOption}
            </option>
          );
        })}
      </select>
      <div className="text-center border-solid border-2 border-black rounded-md mb-1">
        <input
          type="number"
          ref={waterRefInt}
          defaultValue={plant.waterFrequencyInt}
        />
        <select ref={waterRefUnit} defaultValue={plant.waterFrequencyUnit}>
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
        defaultValue={plant.lastWatered}
      ></input>
      <label htmlFor="plant_note">Note</label>
      <textarea
        id="plant_note"
        className="border-solid border-2 border-black rounded-md mb-4 px-2 py-0.5"
        ref={noteRef}
        defaultValue={plant.note}
      ></textarea>
      <button
        className="border-solid border-2 border-black rounded-md p-2"
        onClick={() => {
          handleUpdatePlant(plant.id);
          plant.isEditing = false;
          statusEdit(false);
        }}
      >
        Save
      </button>
      <button
        className="border-solid border-2 border-black rounded-md p-2"
        onClick={() => {
          plant.isEditing = false;
          statusEdit(false);
        }}
      >
        Cancel
      </button> */}
    </>
  );
};

export default EditPlantCard;
