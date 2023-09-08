"use client";
import React from "react";
import { PlantT } from "@/app/types";
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete";

type PlantCardProps = {
  plants: PlantT[];
  setPlants: (plants: PlantT[]) => void;
};

const PlantCard: React.FC<PlantCardProps> = ({ plants, setPlants }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [showDeleteCheck, setShowDeleteCheck] = React.useState(false);

  const nameRef = React.useRef<HTMLInputElement>(null);
  const plantTypeRef = React.useRef<HTMLInputElement>(null);
  const lightRef = React.useRef<HTMLSelectElement>(null);
  const waterRefInt = React.useRef<HTMLInputElement>(null);
  const waterRefUnit = React.useRef<HTMLSelectElement>(null);
  const lastWateredRef = React.useRef<HTMLInputElement>(null);
  const noteRef = React.useRef<HTMLTextAreaElement>(null);

  const handleDeleteConfirmed = (id: string) => {
    setPlants(plants.filter((plant) => plant.id !== id));
    setShowDeleteCheck(false);
  };
  const handleUpdatePlant = (id: string) => {
    const copyOfPlants = plants;
    const plant = copyOfPlants.find((plant) => plant.id === id);
    if (plant) {
      plant.lightLevel = lightRef.current?.value || "";
      plant.plantName = nameRef.current?.value || "";
      plant.plantType = plantTypeRef.current?.value || "";
      plant.waterFrequencyInt = waterRefInt.current?.value || "";
      plant.waterFrequencyUnit = waterRefUnit.current?.value || "";
      plant.lastWatered = lastWateredRef.current?.value || "";
      plant.note = noteRef.current?.value || "";
    }
  };

  return (
    <>
      <section>
        {plants.map((plant) => {
          return (
            <article
              className=" gap-1 flex flex-col items-center border-solid border-2 border-black rounded-md mx-28 my-8 p-8 min-w-[300px]"
              key={plant.id}
            >
              {plant.isEditing && isEditing ? (
                <>
                  <label htmlFor="plant_name">Plant Name</label>
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
                    <option disabled value="">
                      Light Level
                    </option>
                    <option value="Bright Light">Bright Light</option>
                    <option value="Indirect Light">Indirect Light</option>
                    <option value="Low Light">Low Light</option>
                  </select>
                  <div className="text-center border-solid border-2 border-black rounded-md mb-1">
                    <input type="number"ref={waterRefInt} defaultValue={plant.waterFrequencyInt}/>
                    <select
                      ref={waterRefUnit}
                      defaultValue={plant.waterFrequencyUnit}
                    >
                      <option disabled value="">
                        Water Frequency
                      </option>
                      <option value="Day">Day(s)</option>
                      <option value="Week">Week(s)</option>
                      <option value="Month">Month(s)</option>
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
                      setIsEditing(false);
                    }}
                  >
                    Save
                  </button>
                  <button
                    className="border-solid border-2 border-black rounded-md p-2"
                    onClick={() => {
                      plant.isEditing = false;
                      setIsEditing(false);
                    }}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="border-solid border-2 border-black rounded-md p-2"
                    onClick={() => {
                      setIsEditing(true);
                      plant.isEditing = true;
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="border-solid border-2 border-black rounded-md p-2"
                    onClick={
                      // () => setShowDeleteCheck(true)
                      () => {
                        handleDeleteConfirmed(plant.id);
                      }
                    }
                  >
                    Delete
                  </button>
                  <h2 className="text-lg font-bold">{plant.plantName}</h2>
                  <h3>{plant.plantType}</h3>
                  <p>Light Level: {plant.lightLevel}</p>
                  <p>
                    Watering interval: {plant.waterFrequencyInt}{" "}
                    {plant.waterFrequencyUnit}
                  </p>
                  <p>Last Watered: {plant.lastWatered}</p>
                  <p>Note: {plant.note}</p>
                </>
              )}
            </article>
          );
        })}
      </section>
      <ConfirmDelete
        isOpen={showDeleteCheck}
        title="Are You Sure?"
        message="Once Plant is Deleted it Cannot be Restored"
        onConfirm={() => {}}
        onCancel={() => setShowDeleteCheck(false)}
      />
    </>
  );
};

export default PlantCard;
