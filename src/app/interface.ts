export interface IPlant {
    id: string;
    name: string;
    species: string;
    waterCycleValue: number;
    waterCycle: string;
    fertiliserCycleValue: number;
    fertiliserCycle: string;
    lightLevel: string;
    lastWatered: Date;
    note: string | null;
    ownerId: string;
    createdAt: Date;
    updatedAt: Date | null;
}

export interface IPostPlant {
    name: string;
    species: string;
    waterCycleValue: number;
    waterCycle: string;
    fertiliserCycleValue: number;
    fertiliserCycle: string;
    lightLevel: string;
    lastWatered: Date;
    note: string;
}
