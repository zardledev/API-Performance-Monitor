import { useEffect, useState } from "react";
import { createEndpoint, getEndpoints } from "./api/endpointsApi";
import EndpointForm from "./components/EndpointForm";
import EndpointList from "./components/EndpointList";

export default function App() {
  const [endpoints, setEndpoints] = useState([]);
  const [error, setError] = useState("");

  async function loadEndpoints() {
    try {
      const data = await getEndpoints();
      setEndpoints(data);
    } catch (err) {
      setError("Failed to load endpoints.");
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
    <main>
      <h1>PulseAPI Dashboard</h1>
      <p>Monitor and analyze API performance.</p>

      {error ? <p>{error}</p> : null}

      <EndpointForm onCreate={handleCreateEndpoint} />
      <EndpointList endpoints={endpoints} />
    </main>
  );
}