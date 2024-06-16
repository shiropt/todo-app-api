/*
  Warnings:

  - You are about to drop the column `content` on the `Todo` table. All the data in the column will be lost.
  - The `status` column on the `Todo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `deadline` column on the `Todo` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "content",
DROP COLUMN "status",
ADD COLUMN     "status" INTEGER,
DROP COLUMN "deadline",
ADD COLUMN     "deadline" TIMESTAMP(3);
