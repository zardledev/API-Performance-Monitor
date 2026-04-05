import { useState } from "react";
import { runEndpointTest } from "../api/endpointsApi";
import { getEndpointStats } from "../api/statsApi";
import EndpointStats from "./EndpointStats";

export default function EndpointCard({ endpoint }) {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleRunTest() {
    setLoading(true);
    await runEndpointTest(endpoint.id);
    const data = await getEndpointStats(endpoint.id);
    setStats(data);
    setLoading(false);
  }

  async function handleLoadStats() {
    const data = await getEndpointStats(endpoint.id);
    setStats(data);
  }

  return (
    <div>
      <h3>{endpoint.name}</h3>
      <p>{endpoint.method} {endpoint.url}</p>
      <p>{endpoint.description}</p>

      <button onClick={handleRunTest} disabled={loading}>
        {loading ? "Running..." : "Run test"}
      </button>

      <button onClick={handleLoadStats}>
        Load stats
      </button>

      <EndpointStats stats={stats} />
    </div>
  );
}