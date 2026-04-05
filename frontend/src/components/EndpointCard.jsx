import { useState } from "react";
import { runEndpointTest } from "../api/endpointsApi";
import { getEndpointStats } from "../api/statsApi";
import EndpointStats from "./EndpointStats";

export default function EndpointCard({ endpoint }) {
  const [stats, setStats] = useState(null);
  const [running, setRunning] = useState(false);
  const [loadingStats, setLoadingStats] = useState(false);
  const [error, setError] = useState("");

  async function handleRunTest() {
    try {
      setRunning(true);
      setError("");
      await runEndpointTest(endpoint.id);
      const data = await getEndpointStats(endpoint.id);
      setStats(data);
    } catch (err) {
      setError("Test execution failed.");
    } finally {
      setRunning(false);
    }
  }

  async function handleLoadStats() {
    try {
      setLoadingStats(true);
      setError("");
      const data = await getEndpointStats(endpoint.id);
      setStats(data);
    } catch (err) {
      setError("Failed to load stats.");
    } finally {
      setLoadingStats(false);
    }
  }

  return (
    <article className="endpoint-card">
      <div className="endpoint-card-top">
        <div className="endpoint-card-header">
          <span className={`method-badge method-${endpoint.method.toLowerCase()}`}>
            {endpoint.method}
          </span>
          <div>
            <h3>{endpoint.name}</h3>
            <a
              className="endpoint-url"
              href={endpoint.url}
              target="_blank"
              rel="noreferrer"
            >
              {endpoint.url}
            </a>
          </div>
        </div>

        <div className="endpoint-actions">
          <button
            className="button button-primary"
            onClick={handleRunTest}
            disabled={running}
          >
            {running ? "Running..." : "Run test"}
          </button>

          <button
            className="button button-secondary"
            onClick={handleLoadStats}
            disabled={loadingStats}
          >
            {loadingStats ? "Loading..." : "Load stats"}
          </button>
        </div>
      </div>

      <p className="endpoint-description">
        {endpoint.description || "No description provided for this endpoint."}
      </p>

      {error ? <p className="inline-error">{error}</p> : null}
      <EndpointStats stats={stats} />
    </article>
  );
}
