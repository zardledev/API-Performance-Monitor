import client from "./client";

export async function getEndpointStats(id) {
  const response = await client.get(`/api/endpoints/${id}/stats`);
  return response.data;
}