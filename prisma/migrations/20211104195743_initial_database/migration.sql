-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'Funcionario', 'Default');

-- CreateEnum
CREATE TYPE "Genero" AS ENUM ('Masculino', 'Feminino', 'Outros');

-- CreateEnum
CREATE TYPE "ReservaStatusTipo" AS ENUM ('Pendente', 'Cancelada', 'Confirmada', 'CheckedIn', 'CheckedOut');

-- CreateTable
CREATE TABLE "Telefone" (
    "id" TEXT NOT NULL,
    "pais" VARCHAR(3) NOT NULL,
    "ddd" VARCHAR(3) NOT NULL,
    "numero" VARCHAR(9) NOT NULL,
    "descricao" VARCHAR(100) NOT NULL,
    "principal" BOOLEAN NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "Telefone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Endereco" (
    "id" TEXT NOT NULL,
    "pais" VARCHAR(2) NOT NULL,
    "estado" VARCHAR(2) NOT NULL,
    "cidade" VARCHAR(64) NOT NULL,
    "cep" VARCHAR(16) NOT NULL,
    "endereco" VARCHAR(256) NOT NULL,
    "complemento" VARCHAR(128) NOT NULL,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "senha" VARCHAR(50) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "tipo" "Role" NOT NULL DEFAULT E'Default',
    "genero" "Genero",

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Atributo" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "imagemId" TEXT NOT NULL,

    CONSTRAINT "Atributo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Imagem" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "descricao" VARCHAR(50),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Imagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quarto" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(50) NOT NULL,
    "descricao" VARCHAR(300) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "Quarto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReservaStatus" (
    "id" TEXT NOT NULL,
    "reservaId" TEXT NOT NULL,
    "observacao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" "ReservaStatusTipo" NOT NULL,

    CONSTRAINT "ReservaStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reserva" (
    "id" TEXT NOT NULL,
    "quartoId" INTEGER NOT NULL,
    "hospedeId" TEXT NOT NULL,
    "checkIn" TIMESTAMP(3) NOT NULL,
    "checkOut" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reserva_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AtributoToQuarto" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ImagemToQuarto" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Telefone_id_key" ON "Telefone"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Endereco_id_key" ON "Endereco"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Endereco_usuarioId_key" ON "Endereco"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_id_key" ON "Usuario"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cpf_key" ON "Usuario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Atributo_id_key" ON "Atributo"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Imagem_id_key" ON "Imagem"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Quarto_id_key" ON "Quarto"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Reserva_id_key" ON "Reserva"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_AtributoToQuarto_AB_unique" ON "_AtributoToQuarto"("A", "B");

-- CreateIndex
CREATE INDEX "_AtributoToQuarto_B_index" ON "_AtributoToQuarto"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ImagemToQuarto_AB_unique" ON "_ImagemToQuarto"("A", "B");

-- CreateIndex
CREATE INDEX "_ImagemToQuarto_B_index" ON "_ImagemToQuarto"("B");

-- AddForeignKey
ALTER TABLE "Telefone" ADD CONSTRAINT "Telefone_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atributo" ADD CONSTRAINT "Atributo_imagemId_fkey" FOREIGN KEY ("imagemId") REFERENCES "Imagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quarto" ADD CONSTRAINT "Quarto_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReservaStatus" ADD CONSTRAINT "ReservaStatus_reservaId_fkey" FOREIGN KEY ("reservaId") REFERENCES "Reserva"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_quartoId_fkey" FOREIGN KEY ("quartoId") REFERENCES "Quarto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_hospedeId_fkey" FOREIGN KEY ("hospedeId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AtributoToQuarto" ADD FOREIGN KEY ("A") REFERENCES "Atributo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AtributoToQuarto" ADD FOREIGN KEY ("B") REFERENCES "Quarto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImagemToQuarto" ADD FOREIGN KEY ("A") REFERENCES "Imagem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImagemToQuarto" ADD FOREIGN KEY ("B") REFERENCES "Quarto"("id") ON DELETE CASCADE ON UPDATE CASCADE;
