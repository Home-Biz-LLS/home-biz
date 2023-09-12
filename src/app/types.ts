export type typePlant = {
  id: string;
  isEditing: boolean;
  name: string;
  type: string;
  lightLevel: string;
  waterFrequencyInt: string;
  waterFrequencyUnit: string;
  lastWatered: string;
  note: string;
};

export interface IPlant {
  id: string;
  ownerId: string;
  name: string;
  lightLevel: string;
  waterFrequency: string;
  fertiliseFrequency: string;
  createdAt: Date;
  updatedAt: Date;
}