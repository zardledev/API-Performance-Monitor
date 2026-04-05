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
    <section className="panel panel-form">
      <div className="panel-heading">
        <span className="section-tag">New monitor</span>
        <h2>Add endpoint</h2>
        <p>
          Create a new API target with a method, URL, and context for the
          checks you want to run.
        </p>
      </div>

      <form className="endpoint-form" onSubmit={handleSubmit}>
        <label className="field">
          <span>Name</span>
          <input
            name="name"
            placeholder="Payments API"
            value={form.name}
            onChange={handleChange}
          />
        </label>

        <label className="field field-wide">
          <span>URL</span>
          <input
            name="url"
            placeholder="https://api.example.com/v1/health"
            value={form.url}
            onChange={handleChange}
          />
        </label>

        <label className="field">
          <span>Method</span>
          <select name="method" value={form.method} onChange={handleChange}>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="PATCH">PATCH</option>
            <option value="DELETE">DELETE</option>
          </select>
        </label>

        <label className="field field-wide">
          <span>Description</span>
          <input
            name="description"
            placeholder="Public status endpoint for customer traffic"
            value={form.description}
            onChange={handleChange}
          />
        </label>

        <button className="button button-primary field-wide" type="submit">
          Create endpoint
        </button>
      </form>
    </section>
  );
}
