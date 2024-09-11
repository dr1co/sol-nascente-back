-- CreateEnum
CREATE TYPE "StatusQuarto" AS ENUM ('disponivel', 'reservado', 'manutencao');

-- CreateEnum
CREATE TYPE "StatusReserva" AS ENUM ('ativa', 'cancelada', 'checkin', 'finalizada');

-- CreateTable
CREATE TABLE "cliente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quarto" (
    "id" SERIAL NOT NULL,
    "numero" INTEGER NOT NULL,
    "status" "StatusQuarto" NOT NULL,

    CONSTRAINT "quarto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reserva" (
    "id" SERIAL NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "id_quarto" INTEGER NOT NULL,
    "data_checkin" TIMESTAMP(3) NOT NULL,
    "data_checkout" TIMESTAMP(3) NOT NULL,
    "status" "StatusReserva" NOT NULL,

    CONSTRAINT "reserva_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reserva" ADD CONSTRAINT "reserva_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reserva" ADD CONSTRAINT "reserva_id_quarto_fkey" FOREIGN KEY ("id_quarto") REFERENCES "quarto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
