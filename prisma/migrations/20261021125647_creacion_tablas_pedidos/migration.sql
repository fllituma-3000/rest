-- CreateTable
CREATE TABLE "pedido_producto" (
    "id" SERIAL NOT NULL,
    "idpedido" INTEGER NOT NULL,
    "idproducto" INTEGER NOT NULL,

    CONSTRAINT "pedido_producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedido" (
    "id" SERIAL NOT NULL,
    "estatdo" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,

    CONSTRAINT "pedido_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pedido_producto_id_key" ON "pedido_producto"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pedido_id_key" ON "pedido"("id");

-- AddForeignKey
ALTER TABLE "pedido_producto" ADD CONSTRAINT "pedido_producto_idpedido_fkey" FOREIGN KEY ("idpedido") REFERENCES "pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido_producto" ADD CONSTRAINT "pedido_producto_idproducto_fkey" FOREIGN KEY ("idproducto") REFERENCES "productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
