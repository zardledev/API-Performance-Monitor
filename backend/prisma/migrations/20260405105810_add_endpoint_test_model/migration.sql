-- CreateTable
CREATE TABLE "EndpointTest" (
    "id" TEXT NOT NULL,
    "endpointId" TEXT NOT NULL,
    "status" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "success" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EndpointTest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EndpointTest" ADD CONSTRAINT "EndpointTest_endpointId_fkey" FOREIGN KEY ("endpointId") REFERENCES "Endpoint"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
