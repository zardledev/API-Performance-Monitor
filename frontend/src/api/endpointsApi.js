import client from "./client";

export async function getEndpoints() {
  const response = await client.get("/api/endpoints");
  return response.data;
}

export async function createEndpoint(payload) {
  const response = await client.post("/api/endpoints", payload);
  return response.data;
}

export async function runEndpointTest(id) {
  const response = await client.post(`/api/endpoints/${id}/test`);
  return response.data;
}