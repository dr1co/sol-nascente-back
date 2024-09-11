/*
  Warnings:

  - You are about to drop the `cliente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `quarto` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reserva` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "RoomStatus" AS ENUM ('available', 'booked', 'maintenance');

-- CreateEnum
CREATE TYPE "ReservationStatus" AS ENUM ('active', 'cancelled', 'checkin', 'closed');

-- DropForeignKey
ALTER TABLE "reserva" DROP CONSTRAINT "reserva_id_cliente_fkey";

-- DropForeignKey
ALTER TABLE "reserva" DROP CONSTRAINT "reserva_id_quarto_fkey";

-- DropTable
DROP TABLE "cliente";

-- DropTable
DROP TABLE "quarto";

-- DropTable
DROP TABLE "reserva";

-- DropEnum
DROP TYPE "StatusQuarto";

-- DropEnum
DROP TYPE "StatusReserva";

-- CreateTable
CREATE TABLE "customers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rooms" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "status" "RoomStatus" NOT NULL,

    CONSTRAINT "rooms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reservations" (
    "id" SERIAL NOT NULL,
    "id_customer" INTEGER NOT NULL,
    "id_room" INTEGER NOT NULL,
    "date_checkin" TIMESTAMP(3) NOT NULL,
    "date_checkout" TIMESTAMP(3) NOT NULL,
    "status" "ReservationStatus" NOT NULL,

    CONSTRAINT "reservations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_id_customer_fkey" FOREIGN KEY ("id_customer") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_id_room_fkey" FOREIGN KEY ("id_room") REFERENCES "rooms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
