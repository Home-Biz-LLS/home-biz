import { PlantT } from "@/app/types";
import React from "react";

type PlantCardProps = {
  statusEdit: (value: boolean) => void;
  handleDelete: (value: string) => void;
  plant: PlantT;
};

const PlantCard: React.FC<PlantCardProps> = ({
  statusEdit,
  handleDelete,
  plant,
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
        onClick={
          () => {
            handleDelete(plant.id);
          }
        }
      >
        Delete
      </button>
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
