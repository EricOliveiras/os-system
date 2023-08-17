/*
  Warnings:

  - The primary key for the `service_order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `service_order` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "service_order" DROP CONSTRAINT "service_order_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "service_order_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "service_order_id_key" ON "service_order"("id");
