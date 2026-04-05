# PulseAPI (API Performance Monitor)

A fullstack application designed to monitor, analyze and optimize API performance.

---

## Overview

PulseAPI is a project focused on measuring API performance and providing insights on latency, reliability and efficiency.

This project demonstrates practical skills in:
- backend architecture design
- API development with Node.js
- performance analysis
- building maintainable and scalable applications

---

## Current Status

Project in progress.

### Completed
- Express backend initialization
- Modular project structure
- Healthcheck endpoint

### Next Steps
- PostgreSQL setup (Docker)
- Prisma integration
- Endpoint management (CRUD)
- API performance testing
- Frontend dashboard (React)

---

## Tech Stack

- Backend: Node.js, Express
- Frontend: React (planned)
- Database: PostgreSQL (Docker)
- ORM: Prisma (planned)

---

## Install dependencies


## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/zardledev/API-Performance-Monitor
cd API-Performance-Monitor/backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the server

```bash
npm run dev
```
### 4. Test the API
```bash
GET http://localhost:3000/health
```
Response:
```json
{
  "status": "ok",
  "message": "PulseAPI backend is running"
}
```

### 5. Project Structure
```
backend/
└── src/
    ├── app.js
    ├── server.js
    ├── modules/
    │   └── health/
    ├── middlewares/

```
### RoadMap

> [!NOTE]
> Initialize Express backend - <span style="color:green">DONE</span>
> Add healthcheck route - <span style="color:green">DONE</span>
> Setup PostgreSQL (Docker) - <span style="color:orange">PLANNED</span>
> Setup Prisma - <span style="color:orange">PLANNED</span>
> Implement Endpoint CRUD - <span style="color:orange">PLANNED</span>
> Add API test runner - <span style="color:orange">PLANNED</span>
> Compute performance statistics - <span style="color:orange">PLANNED</span>
> Build React dashboard - <span style="color:orange">PLANNED</span>






## Author

Julian Boi - Fullstack Developer | React • Node.js • API Optimization • Web Performance | Remote-ready