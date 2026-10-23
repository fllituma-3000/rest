/*
  Warnings:

  - You are about to drop the column `estatdo` on the `pedido` table. All the data in the column will be lost.
  - Added the required column `estado` to the `pedido` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pedido" DROP COLUMN "estatdo",
ADD COLUMN     "estado" TEXT NOT NULL;
