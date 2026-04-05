const service = require("./endpoint.service");

async function createEndpoint(req, res, next) {
  try {
    const endpoint = await service.createEndpoint(req.body);
    res.status(201).json(endpoint);
  } catch (error) {
    next(error);
  }
}

async function getAllEndpoints(req, res, next) {
  try {
    const endpoints = await service.getAllEndpoints();
    res.status(200).json(endpoints);
  } catch (error) {
    next(error);
  }
}

async function getEndpointById(req, res, next) {
  try {
    const endpoint = await service.getEndpointById(req.params.id);
    res.status(200).json(endpoint);
  } catch (error) {
    next(error);
  }
}

async function updateEndpoint(req, res, next) {
  try {
    const endpoint = await service.updateEndpoint(req.params.id, req.body);
    res.status(200).json(endpoint);
  } catch (error) {
    next(error);
  }
}

async function deleteEndpoint(req, res, next) {
  try {
    await service.deleteEndpoint(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createEndpoint,
  getAllEndpoints,
  getEndpointById,
  updateEndpoint,
  deleteEndpoint,
};