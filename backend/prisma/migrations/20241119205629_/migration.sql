/*
  Warnings:

  - You are about to drop the column `rgs` on the `client` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[rg]` on the table `Client` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `rg` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Client_rgs_key` ON `client`;

-- AlterTable
ALTER TABLE `client` DROP COLUMN `rgs`,
    ADD COLUMN `rg` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Client_rg_key` ON `Client`(`rg`);
