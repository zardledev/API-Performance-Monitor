const prisma = require("../../lib/prisma");

async function createTest(data) {
  return prisma.endpointTest.create({ data });
}

module.exports = {
  createTest,
};