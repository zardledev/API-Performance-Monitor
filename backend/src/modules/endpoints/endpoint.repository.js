const prisma = require("../../lib/prisma");

async function createEndpoint(data) {
  return prisma.endpoint.create({ data });
}

async function getAllEndpoints() {
  return prisma.endpoint.findMany({
    orderBy: { createdAt: "desc" },
  });
}

async function getEndpointById(id) {
  return prisma.endpoint.findUnique({
    where: { id },
  });
}

async function updateEndpoint(id, data) {
  return prisma.endpoint.update({
    where: { id },
    data,
  });
}

async function deleteEndpoint(id) {
  return prisma.endpoint.delete({
    where: { id },
  });
}

module.exports = {
  createEndpoint,
  getAllEndpoints,
  getEndpointById,
  updateEndpoint,
  deleteEndpoint,
};