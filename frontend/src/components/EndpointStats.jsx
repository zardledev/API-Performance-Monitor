export default function EndpointStats({ stats }) {
  function formatMetric(value, suffix = "") {
    if (value === null || value === undefined) {
      return "N/A";
    }

    return `${Number(value).toFixed(Number.isInteger(value) ? 0 : 2)}${suffix}`;
  }

  if (!stats) {
    return <p>No stats available yet.</p>;
  }

  return (
    <div>
      <p>Total tests: {stats.total}</p>
      <p>Average duration: {formatMetric(stats.avgDuration, " ms")}</p>
      <p>Min duration: {formatMetric(stats.minDuration, " ms")}</p>
      <p>Max duration: {formatMetric(stats.maxDuration, " ms")}</p>
      <p>Success rate: {formatMetric(stats.successRate, "%")}</p>
      <p>Success count: {stats.successCount}</p>
      <p>Failure count: {stats.failureCount}</p>
      <p>Failure rate: {formatMetric(stats.failureRate, "%")}</p>
      <p>P95 duration: {formatMetric(stats.p95Duration, " ms")}</p>
      <p>P99 duration: {formatMetric(stats.p99Duration, " ms")}</p>
      <p>
        Last test at:{" "}
        {stats.lastTestAt ? new Date(stats.lastTestAt).toLocaleString() : "N/A"}
      </p>
    </div>
  );
}
