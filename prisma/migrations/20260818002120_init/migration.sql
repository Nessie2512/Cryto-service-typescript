-- CreateTable
CREATE TABLE "statement" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "creditcard" TEXT NOT NULL,
    "value" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "statement_uuid_key" ON "statement"("uuid");
