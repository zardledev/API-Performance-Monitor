import EndpointCard from "./EndpointCard";

export default function EndpointList({ endpoints, loading }) {
  if (loading) {
    return (
      <section className="panel panel-list">
        <div className="panel-heading">
          <span className="section-tag">Monitors</span>
          <h2>Loading endpoints</h2>
          <p>Fetching the current set of registered APIs.</p>
        </div>
      </section>
    );
  }

  if (endpoints.length === 0) {
    return (
      <section className="panel panel-list">
        <div className="panel-heading">
          <span className="section-tag">Monitors</span>
          <h2>No endpoints yet</h2>
          <p>Create your first endpoint to start collecting latency data.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="panel panel-list">
      <div className="panel-heading panel-heading-inline">
        <div>
          <span className="section-tag">Monitors</span>
          <h2>Registered endpoints</h2>
          <p>Run checks on demand and inspect the latest performance summary.</p>
        </div>
        <span className="count-badge">{endpoints.length} active</span>
      </div>

      <div className="endpoint-stack">
        {endpoints.map((endpoint) => (
          <EndpointCard key={endpoint.id} endpoint={endpoint} />
        ))}
      </div>
    </section>
  );
}
