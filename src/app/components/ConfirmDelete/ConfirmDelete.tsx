import { IPlant } from "@/app/interface";
import React from "react";

type ConfirmDeleteProps = {
  plant: IPlant;
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: (value: string) => void;
  onCancel: () => void;
};

const ConfirmDelete: React.FC<ConfirmDeleteProps> = (props) => {
  const { plant, isOpen, title, message, onConfirm, onCancel } = props;

  {
    return (
      <div className="border-solid border-2 border-black rounded-md p-2">
        <h3>{title}</h3>
        <p>{message}</p>
        <button
          className="border-solid border-2 border-black rounded-md p-2"
          onClick={() => onConfirm(plant.id)}
        >
          Yes
        </button>
        <button
          className="border-solid border-2 border-black rounded-md p-2"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    );
  }

  return null;
};

export default ConfirmDelete;
