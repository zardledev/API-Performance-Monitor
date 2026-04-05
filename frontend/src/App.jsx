import { useEffect, useState } from "react";
import { createEndpoint, getEndpoints } from "./api/endpointsApi";
import EndpointForm from "./components/EndpointForm";
import EndpointList from "./components/EndpointList";

export default function App() {
  const [endpoints, setEndpoints] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const overview = [
    { label: "Endpoints", value: endpoints.length },
    { label: "Mode", value: "Manual checks" },
    { label: "Stack", value: "React + Express" },
  ];

  async function loadEndpoints() {
    try {
      setLoading(true);
      const data = await getEndpoints();
      setEndpoints(data);
      setError("");
    } catch (err) {
      setError("Failed to load endpoints.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEndpoints();
  }, []);

  async function handleCreateEndpoint(payload) {
    try {
      await createEndpoint(payload);
      await loadEndpoints();
      setError("");
    } catch (err) {
      setError("Failed to create endpoint.");
    }
  }

  return (
    <main className="app-shell">
      <section className="topbar">
        <div>
          <span className="eyebrow">PulseAPI</span>
          <h1>API performance dashboard</h1>
          <p className="hero-text">
            Register endpoints, run checks on demand, and review latency and
            reliability metrics in one place.
          </p>
        </div>
        <div className="overview-strip">
          {overview.map((item) => (
            <div className="overview-card" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </section>

      {error ? <p className="banner banner-error">{error}</p> : null}

      <section className="dashboard-grid">
        <EndpointForm onCreate={handleCreateEndpoint} />
        <EndpointList endpoints={endpoints} loading={loading} />
      </section>
    </main>
  );
}
