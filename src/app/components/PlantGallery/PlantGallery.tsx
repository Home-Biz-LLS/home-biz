"use client";
import React from "react";
import { PlantT } from "@/app/types";
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete";
import PlantCard from "./PlantCard";
import EditPlantCard from "./EditPlantCard";

type PlantGalleryProps = {
  plants: PlantT[];
  setPlants: (plants: PlantT[]) => void;
};

const PlantGallery: React.FC<PlantGalleryProps> = ({ plants, setPlants }) => {
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

  const handleEdit = (value: boolean) => {
    setIsEditing(value);
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
                <EditPlantCard
                  handleUpdatePlant={handleUpdatePlant}
                  nameRef={nameRef}
                  plantTypeRef={plantTypeRef}
                  lightRef={lightRef}
                  waterRefInt={waterRefInt}
                  waterRefUnit={waterRefUnit}
                  lastWateredRef={lastWateredRef}
                  noteRef={noteRef}
                  plant={plant}
                  statusEdit={setIsEditing}
                />
              ) : (
                <PlantCard
                  statusEdit={handleEdit}
                  handleDelete={handleDeleteConfirmed}
                  plant={plant}
                />
              )}
            </article>
          );
        })}
      </section>
      {/* <ConfirmDelete
        isOpen={showDeleteCheck}
        title="Are You Sure?"
        message="Once Plant is Deleted it Cannot be Restored"
        onConfirm={() => {}}
        onCancel={() => setShowDeleteCheck(false)}
      /> */}
    </>
  );
};

export default PlantGallery;
