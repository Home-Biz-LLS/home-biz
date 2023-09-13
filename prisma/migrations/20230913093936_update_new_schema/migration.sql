/*
  Warnings:

  - You are about to drop the column `fertiliseFrequency` on the `Plant` table. All the data in the column will be lost.
  - You are about to drop the column `waterFrequency` on the `Plant` table. All the data in the column will be lost.
  - Added the required column `fertiliserCycleValue` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastWatered` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `note` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `species` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `waterCycleValue` to the `Plant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Plant" DROP COLUMN "fertiliseFrequency",
DROP COLUMN "waterFrequency",
ADD COLUMN     "fertiliserCycleValue" INTEGER NOT NULL,
ADD COLUMN     "lastWatered" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "note" TEXT NOT NULL,
ADD COLUMN     "species" TEXT NOT NULL,
ADD COLUMN     "waterCycleValue" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "FertiliseFrequency";

-- DropEnum
DROP TYPE "WaterFrequency";
