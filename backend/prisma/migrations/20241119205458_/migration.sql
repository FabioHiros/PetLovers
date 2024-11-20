/*
  Warnings:

  - You are about to drop the `rg` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[rgs]` on the table `Client` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `rgs` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `rg` DROP FOREIGN KEY `RG_clientId_fkey`;

-- AlterTable
ALTER TABLE `client` ADD COLUMN `rgs` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `rg`;

-- CreateIndex
CREATE UNIQUE INDEX `Client_rgs_key` ON `Client`(`rgs`);
