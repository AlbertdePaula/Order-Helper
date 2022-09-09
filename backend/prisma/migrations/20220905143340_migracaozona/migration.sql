-- CreateTable
CREATE TABLE "engines" (
    "id" SERIAL NOT NULL,
    "fieldTag" TEXT NOT NULL,
    "equipament" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "nominal" DOUBLE PRECISION NOT NULL,
    "power" DOUBLE PRECISION NOT NULL,
    "rotation" INTEGER NOT NULL,
    "horsePw" INTEGER NOT NULL,

    CONSTRAINT "engines_pkey" PRIMARY KEY ("id")
);
