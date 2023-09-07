import React from 'react'
import { PlantT } from '@/app/types';
import { v4 as uuidv4 } from 'uuid';



type AddPlantProps = {
  plants: PlantT[];
  setPlants: (plants: PlantT[]) => void
}

const AddPlant: React.FC<AddPlantProps> = ({plants, setPlants}) => {

  const nameRef = React.useRef<HTMLInputElement>(null);
  const lightRef = React.useRef<HTMLSelectElement>(null)
  const waterRef = React.useRef<HTMLSelectElement>(null)
  const noteRef = React.useRef<HTMLTextAreaElement>(null)

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    const id = uuidv4()
    const plantName = nameRef.current?.value || "";
    const lightLevel = lightRef.current?.value || ""
    const waterFrequency = waterRef.current?.value || ""
    const note = noteRef.current?.value || ""
    const isEditing = false
    setPlants([...plants, {id, isEditing, plantName, lightLevel, waterFrequency, note }]);

    const refs = [nameRef, lightRef, waterRef, noteRef];
    refs.forEach((ref) => {
      if (ref.current) {
        ref.current.value = "";
      }
    } );

    };
  return (
    <form>
      <h1>Add Plant</h1>
      <label htmlFor="plant_name">Plant Name</label>
      <input
        ref={nameRef}
        id="plant_name"
        type="text"
        placeholder="plant name"
      />
      <select ref={lightRef} defaultValue="Light Level">
        <option disabled value="">Light Level</option>
        <option value="Bright Light">Bright Light</option>
        <option value="Indirect Light">Indirect Light</option>
        <option value="Low Light">Low Light</option>
      </select>
      <select ref={waterRef} defaultValue="Water Frequency">
        <option disabled value="">Water Frequency</option>
        <option value="Every 7 days">Every 7 days</option>
        <option value="Every 14 days">Every 14 days</option>
        <option value="Every 30 days">Every 30 days</option>
      </select>
      <textarea ref={noteRef}></textarea>
      <button onClick={handleClick}>Add Plant</button>
    </form>
  )
}

export default AddPlant