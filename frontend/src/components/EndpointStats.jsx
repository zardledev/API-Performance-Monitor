export default function EndpointStats({ stats }) {
  function formatMetric(value, suffix = "") {
    if (value === null || value === undefined) {
      return "N/A";
    }

    return `${Number(value).toFixed(Number.isInteger(value) ? 0 : 2)}${suffix}`;
  }

  if (!stats) {
    return (
      <div className="stats-empty">
        <p>No metrics loaded yet. Run a test or fetch the latest stats.</p>
      </div>
    );
  }

  const summaryCards = [
    { label: "Avg latency", value: formatMetric(stats.avgDuration, " ms") },
    { label: "Success rate", value: formatMetric(stats.successRate, "%") },
    { label: "P95", value: formatMetric(stats.p95Duration, " ms") },
    { label: "Total checks", value: stats.total },
  ];

  const rows = [
    ["Total tests", stats.total],
    ["Average duration", formatMetric(stats.avgDuration, " ms")],
    ["Min duration", formatMetric(stats.minDuration, " ms")],
    ["Max duration", formatMetric(stats.maxDuration, " ms")],
    ["P95 duration", formatMetric(stats.p95Duration, " ms")],
    ["P99 duration", formatMetric(stats.p99Duration, " ms")],
    ["Success count", stats.successCount],
    ["Failure count", stats.failureCount],
    ["Success rate", formatMetric(stats.successRate, "%")],
    ["Failure rate", formatMetric(stats.failureRate, "%")],
    [
      "Last test at",
      stats.lastTestAt ? new Date(stats.lastTestAt).toLocaleString() : "N/A",
    ],
  ];

  return (
    <section className="stats-panel">
      <div className="stats-summary-grid">
        {summaryCards.map((card) => (
          <div className="stats-summary-card" key={card.label}>
            <span>{card.label}</span>
            <strong>{card.value}</strong>
          </div>
        ))}
      </div>

      <div className="stats-table-wrap">
        <table className="stats-table">
          <tbody>
            {rows.map(([label, value]) => (
              <tr key={label}>
                <th scope="row">{label}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
