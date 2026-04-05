const axios = require("axios");
const endpointRepo = require("../endpoints/endpoint.repository");
const testRepo = require("./test.repository");

async function runTest(endpointId) {
  const endpoint = await endpointRepo.getEndpointById(endpointId);

  if (!endpoint) {
    const error = new Error("Endpoint not found");
    error.status = 404;
    throw error;
  }

  const start = Date.now();

  try {
    const response = await axios({
      method: endpoint.method,
      url: endpoint.url,
    });

    const duration = Date.now() - start;

    return testRepo.createTest({
      endpointId,
      status: response.status,
      duration,
      success: true,
    });
  } catch (error) {
    const duration = Date.now() - start;

    return testRepo.createTest({
      endpointId,
      status: error.response?.status || 500,
      duration,
      success: false,
    });
  }
}

async function getStats(endpointId) {
  const endpoint = await endpointRepo.getEndpointById(endpointId);

  if (!endpoint) {
    const error = new Error("Endpoint not found");
    error.status = 404;
    throw error;
  }

  return testRepo.getStatsByEndpoint(endpointId);
}

module.exports = {
  runTest,
  getStats,
};
