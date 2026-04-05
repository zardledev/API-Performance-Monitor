import EndpointCard from "./EndpointCard";

export default function EndpointList({ endpoints }) {
  if (endpoints.length === 0) {
    return <p>No endpoints registered yet.</p>;
  }

  return (
    <div>
      {endpoints.map((endpoint) => (
        <EndpointCard key={endpoint.id} endpoint={endpoint} />
      ))}
    </div>
  );
}