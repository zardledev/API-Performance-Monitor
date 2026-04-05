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

    const test = await testRepo.createTest({
      endpointId,
      status: response.status,
      duration,
      success: true,
    });

    return test;
  } catch (err) {
    const duration = Date.now() - start;

    const test = await testRepo.createTest({
      endpointId,
      status: err.response?.status || 500,
      duration,
      success: false,
    });

    return test;
  }
}

module.exports = {
  runTest,
};