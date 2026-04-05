const repository = require("./endpoint.repository");

async function createEndpoint(payload) {
  return repository.createEndpoint(payload);
}

async function getAllEndpoints() {
  return repository.getAllEndpoints();
}

async function getEndpointById(id) {
  const endpoint = await repository.getEndpointById(id);

  if (!endpoint) {
    const error = new Error("Endpoint not found");
    error.status = 404;
    throw error;
  }

  return endpoint;
}

async function updateEndpoint(id, payload) {
  await getEndpointById(id);
  return repository.updateEndpoint(id, payload);
}

async function deleteEndpoint(id) {
  await getEndpointById(id);
  return repository.deleteEndpoint(id);
}

module.exports = {
  createEndpoint,
  getAllEndpoints,
  getEndpointById,
  updateEndpoint,
  deleteEndpoint,
};