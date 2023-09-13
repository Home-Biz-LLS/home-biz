/*
  Warnings:

  - The values [HIGH,MEDIUM,LOW] on the enum `LightLevel` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `fertiliserCycle` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `waterCycle` to the `Plant` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "WaterCycle" AS ENUM ('Day', 'Week', 'Month');

-- CreateEnum
CREATE TYPE "FertiliserCycle" AS ENUM ('Day', 'Week', 'Month');

-- AlterEnum
BEGIN;
CREATE TYPE "LightLevel_new" AS ENUM ('High', 'Medium', 'Low');
ALTER TABLE "Plant" ALTER COLUMN "lightLevel" TYPE "LightLevel_new" USING ("lightLevel"::text::"LightLevel_new");
ALTER TYPE "LightLevel" RENAME TO "LightLevel_old";
ALTER TYPE "LightLevel_new" RENAME TO "LightLevel";
DROP TYPE "LightLevel_old";
COMMIT;

-- AlterTable
ALTER TABLE "Plant" ADD COLUMN     "fertiliserCycle" "FertiliserCycle" NOT NULL,
ADD COLUMN     "waterCycle" "WaterCycle" NOT NULL,
ALTER COLUMN "note" DROP NOT NULL;
