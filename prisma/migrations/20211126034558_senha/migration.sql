-- AlterTable
ALTER TABLE "ReservaStatus" ALTER COLUMN "status" SET DEFAULT E'Pendente';

-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "senha" SET DATA TYPE VARCHAR(200);
