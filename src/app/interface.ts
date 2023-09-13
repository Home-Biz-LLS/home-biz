export interface IPlant {
    id: string;
    name: string;
    species: string;
    waterCycleValue: number;
    fertiliserCycleValue: number;
    lightLevel: string;
    lastWatered: Date;
    note: string;
    ownerId: string;
    createdAt: Date;
    updatedAt: Date | null;
}

export interface ITestPlant {
  name: string;
  species: string;
  lightLevel: string;
  wateringInterval: string;
  lastWatered: string;
  note: string;
}

export interface IPostPlant {
    name: string;
    species: string;
    waterCycleValue: number;
    fertiliserCycleValue: number;
    lightLevel: string;
    lastWatered: Date;
    note: string;
}
