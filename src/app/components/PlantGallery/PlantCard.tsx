import { PlantT } from "@/app/types";
import React from "react";

type PlantCardProps = {
  statusEdit: (value: boolean) => void;
  handleDelete: (valye: PlantT) => void;
  plant: PlantT;
  handleWaterPlant: (id: string) => void;
};

const PlantCard: React.FC<PlantCardProps> = ({
  statusEdit,
  handleDelete,
  plant,
  handleWaterPlant
}) => {
  return (
    <>
      <button
        className="border-solid border-2 border-black rounded-md p-2"
        onClick={() => {
          statusEdit(true);
          plant.isEditing = true;
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
      <button className="border-solid border-2 border-black rounded-md p-2" onClick={() => handleWaterPlant(plant.id)}>Water Plant</button>
      <h2 className="text-lg font-bold">{plant.plantName}</h2>
      <h3>{plant.plantType}</h3>
      <p>Light Level: {plant.lightLevel}</p>
      <p>
        Watering interval: {plant.waterFrequencyInt} {plant.waterFrequencyUnit}
      </p>
      <p>Last Watered: {plant.lastWatered}</p>
      <p>Note: {plant.note}</p>
    </>
  );
};

export default PlantCard;
