import { useState } from "react";

export default function EndpointForm({ onCreate }) {
  const [form, setForm] = useState({
    name: "",
    url: "",
    method: "GET",
    description: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await onCreate(form);
    setForm({
      name: "",
      url: "",
      method: "GET",
      description: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add endpoint</h2>

      <input
        name="name"
        placeholder="Endpoint name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="url"
        placeholder="https://api.example.com/users"
        value={form.url}
        onChange={handleChange}
      />

      <select name="method" value={form.method} onChange={handleChange}>
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="PATCH">PATCH</option>
        <option value="DELETE">DELETE</option>
      </select>

      <input
        name="description"
        placeholder="Short description"
        value={form.description}
        onChange={handleChange}
      />

      <button type="submit">Create endpoint</button>
    </form>
  );
}