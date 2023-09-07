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
  const lightRef = React.useRef<HTMLSelectElement>(null);
  const waterRef = React.useRef<HTMLSelectElement>(null);
  const noteRef = React.useRef<HTMLTextAreaElement>(null);

  const handleDeleteConfirmed = (id: string) => {
    setPlants(plants.filter((plant) => plant.id !== id));
    setShowDeleteCheck(false);
  };
  const handleUpdatePlant = (id: string) => {
    console.log(id);
    console.log(plants)
    const copyOfPlants = plants
    const plant = copyOfPlants.find(x => x.id === id);
    console.log(plant)
    if (plant) {
      plant.lightLevel = lightRef.current?.value || ""
      plant.plantName = nameRef.current?.value || ""
      plant.waterFrequency = waterRef.current?.value || ""
      plant.note = noteRef.current?.value || ""
    }
    
  };

  return (
    <>
      <section>
        {plants.map((plant) => {
          return (
            <article key={plant.id}>
              {plant.isEditing && isEditing ? (
                <>
                  <label htmlFor="plant_name">Plant Name</label>
                  <input
                    id="plant_name"
                    ref={nameRef}
                    type="text"
                    placeholder="plant name"
                    defaultValue={plant.plantName}
                  />
                  <select ref={lightRef} defaultValue={plant.lightLevel}>
                    <option disabled value="">
                      Light Level
                    </option>
                    <option value="Bright Light">Bright Light</option>
                    <option value="Indirect Light">Indirect Light</option>
                    <option value="Low Light">Low Light</option>
                  </select>
                  <select ref={waterRef} defaultValue={plant.waterFrequency}>
                    <option disabled value="">
                      Water Frequency
                    </option>
                    <option value="Every 7 days">Every 7 days</option>
                    <option value="Every 14 days">Every 14 days</option>
                    <option value="Every 30 days">Every 30 days</option>
                  </select>
                  <textarea ref={noteRef} defaultValue={plant.note}></textarea>

                  <button
                    onClick={() => {
                      handleUpdatePlant(plant.id);
                      plant.isEditing = false
                      setIsEditing(false);
                    }}
                  >
                    Save
                  </button>
                  <button onClick={() => {
                    plant.isEditing = false
                    setIsEditing(false)
                    }}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => {
                    setIsEditing(true)
                    plant.isEditing = true
                  }}>Edit</button>
                  <button
                    onClick={
                      // () => setShowDeleteCheck(true)
                      () => {
                        handleDeleteConfirmed(plant.id);
                      }
                    }
                  >
                    Delete
                  </button>
                  <h2>{plant.plantName}</h2>
                  <p>Light Level: {plant.lightLevel}</p>
                  <p>Water frequency: {plant.waterFrequency}</p>
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
