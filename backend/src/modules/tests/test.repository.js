const prisma = require("../../lib/prisma");

async function createTest(data) {
  return prisma.endpointTest.create({ data });
}
async function getStatsByEndpoint(endpointId) {
  const stats = await prisma.endpointTest.aggregate({
    where: { endpointId },
    _avg: {
      duration: true,
    },
    _min: {
      duration: true,
    },
    _max: {
      duration: true,
    },
    _count: {
      id: true,
    },
  });

  const successCount = await prisma.endpointTest.count({
    where: {
      endpointId,
      success: true,
    },
  });

  return {
    total: stats._count.id,
    avgDuration: stats._avg.duration,
    minDuration: stats._min.duration,
    maxDuration: stats._max.duration,
    successRate:
      stats._count.id === 0
        ? 0
        : (successCount / stats._count.id) * 100,
  };
}
module.exports = {
  createTest,
  getStatsByEndpoint,
};
