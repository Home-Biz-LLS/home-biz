"use client"
import React from 'react'
import { PlantT } from '@/app/types';
import ConfirmDelete from '../ConfirmDelete/ConfirmDelete';

type PlantCardProps = {
  plants: PlantT[];
  setPlants: (plants: PlantT[]) => void
}

const PlantCard: React.FC<PlantCardProps> = ({ plants, setPlants }) => {

  const [showDeleteCheck, setShowDeleteCheck] = React.useState(false)
  const handleDeleteConfirmed = () => {
    setPlants(plants.filter(plant => plant.plantName !== plant.plantName))
    setShowDeleteCheck(false)
  }

  return (
    <>
    <section>
      {plants.map((plant, index) => {
        return (
          <article key={index}>
            <button>Edit</button>
            <button onClick={() => setShowDeleteCheck(true)}>Delete</button>
            <h2>{plant.plantName}</h2>
            <p>{plant.lightLevel}</p>
            <p>{plant.waterFrequency}</p>
            <p>{plant.note}</p>
          </article>
        )
      })}
      </section>
      <ConfirmDelete 
      isOpen={showDeleteCheck}
      title="Are You Sure?"
      message="Once Plant is Deleted it Cannot be Restored"
      onConfirm={handleDeleteConfirmed}
      onCancel={() => setShowDeleteCheck(false)}
      />
      </>
  )
}

export default PlantCard