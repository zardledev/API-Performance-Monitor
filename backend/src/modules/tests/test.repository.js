const prisma = require("../../lib/prisma");

async function createTest(data) {
  return prisma.endpointTest.create({ data });
}

function calculatePercentile(sortedValues, percentile) {
  if (sortedValues.length === 0) {
    return null;
  }

  const index = Math.ceil((percentile / 100) * sortedValues.length) - 1;
  const boundedIndex = Math.min(Math.max(index, 0), sortedValues.length - 1);

  return sortedValues[boundedIndex];
}

async function getStatsByEndpoint(endpointId) {
  const [stats, successCount, tests] = await Promise.all([
    prisma.endpointTest.aggregate({
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
    }),
    prisma.endpointTest.count({
      where: {
        endpointId,
        success: true,
      },
    }),
    prisma.endpointTest.findMany({
      where: { endpointId },
      select: {
        duration: true,
        createdAt: true,
      },
      orderBy: {
        duration: "asc",
      },
    }),
  ]);

  const total = stats._count.id;
  const failureCount = total - successCount;
  const sortedDurations = tests.map((test) => test.duration);
  const lastTestAt =
    tests.length === 0
      ? null
      : tests.reduce(
          (latest, test) => (test.createdAt > latest ? test.createdAt : latest),
          tests[0].createdAt
        );

  return {
    total,
    avgDuration: stats._avg.duration,
    minDuration: stats._min.duration,
    maxDuration: stats._max.duration,
    p95Duration: calculatePercentile(sortedDurations, 95),
    p99Duration: calculatePercentile(sortedDurations, 99),
    successCount,
    failureCount,
    successRate: total === 0 ? 0 : (successCount / total) * 100,
    failureRate: total === 0 ? 0 : (failureCount / total) * 100,
    lastTestAt,
  };
}

module.exports = {
  createTest,
  getStatsByEndpoint,
};
