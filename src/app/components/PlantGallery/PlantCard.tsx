import { IPlant } from "@/app/interface";
import React from "react";

type PlantCardProps = {
  // statusEdit: (value: boolean) => void;
  // handleDelete: (value: IPlant) => void;
  plant: IPlant;
  // handleWaterPlant: (id: string) => void;
};

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  return (
    <>
      {/* <button
        className="border-solid border-2 border-black rounded-md p-2"
        onClick={() => {
          statusEdit(true);
          // plant.isEditing = true;
        }}
      >
        Edit
      </button>
      <button
        className="border-solid border-2 border-black rounded-md p-2"
        onClick={() =>handleDelete(plant)}
      >
        Delete
      </button>
      <button className="border-solid border-2 border-black rounded-md p-2" onClick={() => handleWaterPlant(plant.id)}>Water Plant</button> */}
      <h2 className="text-lg font-bold">{plant.name}</h2>
      <h3>{plant.species}</h3>
      <p>Light Level: {plant.lightLevel}</p>
      <p>Water cycle: {plant.waterCycleValue} Days</p>
      <p>Fertiliser Cycle: {plant.fertiliserCycleValue} Days</p>
      <p>Last Watered: {plant.lastWatered.toString().substring(0, 10)}</p>
      <p>Note: {plant.note}</p>
    </>
  );
};

export default PlantCard;
