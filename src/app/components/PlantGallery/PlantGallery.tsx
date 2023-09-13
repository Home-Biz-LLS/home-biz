import React from "react";
import { IPlant } from "@/app/interface";
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete";
import PlantCard from "./PlantCard";
import EditPlantCard from "./EditPlantCard";
import prisma from "../../../../prisma/prisma";

type PlantGalleryProps = {
  plants: IPlant[];
};

const PlantGallery: React.FC<PlantGalleryProps> = ({ plants }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [showDeleteCheck, setShowDeleteCheck] = React.useState(false);

  const handleDeleteConfirmed = (id: string) => {
    // setPlants(plants.filter((plant) => plant.id !== id));
    setShowDeleteCheck(!showDeleteCheck);
  };

  const handleShowDelete = () => {
    // plant.isEditing = true;
    setShowDeleteCheck(!showDeleteCheck);
  };

  // const handleEdit = (value: boolean) => {
  //   setIsEditing(value);
  // };

  // const handleUpdatePlant = (id: string) => {
  //   const copyOfPlants = plants;
  //   const plant = copyOfPlants.find((plant) => plant.id === id);
  //   if (plant) {
  //     plant.lightLevel = lightRef.current?.value || "";
  //     plant.name = nameRef.current?.value || "";
  //     plant.type = plantTypeRef.current?.value || "";
  //     plant.waterFrequencyInt = waterRefInt.current?.value || "";
  //     plant.waterFrequencyUnit = waterRefUnit.current?.value || "";
  //     plant.lastWatered = lastWateredRef.current?.value || "";
  //     plant.note = noteRef.current?.value || "";
  //   }
  // };

  // const handleWaterPlant = (id: string) => {
  //   const copyOfPlants = plants;
  //   const plant = copyOfPlants.find((plant) => plant.id === id);
  //   if (plant) {
  //     plant.lastWatered = new Date().toISOString().substring(0, 10);
  //   }
  //   // setPlants([...plants]);
  // };

  return (
    <>
      <section>
        {plants.map((plant) => {
          console.log(plant);

          return (
            <article
              className=" gap-1 flex flex-col items-center border-solid border-2 border-black rounded-md mx-28 my-8 p-8 min-w-[300px]"
              key={plant.id}
            >
              <PlantCard plant={plant} />
              {/* <ConfirmDelete
                plant={plant}
                isOpen={showDeleteCheck}
                title="Are You Sure?"
                message="Once Plant is Deleted it Cannot be Restored"
                onConfirm={handleDeleteConfirmed}
                onCancel={handleShowDelete}
              /> */}
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
