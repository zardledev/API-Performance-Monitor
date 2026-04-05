# PulseAPI (API Performance Monitor)

A fullstack application designed to monitor, analyze and optimize API performance.

---

## Overview

PulseAPI is a project focused on measuring API performance and providing insights on latency, reliability and efficiency.

This project demonstrates practical skills in:
- backend architecture design
- API development with Node.js
- database integration with PostgreSQL
- performance analysis
- building scalable and maintainable applications

---

## Current Status

Project in progress.

### Completed
- Express backend initialization
- Modular architecture (routes, middlewares, modules)
- Healthcheck endpoint
- PostgreSQL setup with Docker

### In Progress
- Prisma integration

### Next Steps
- Endpoint management (CRUD)
- API performance testing
- Performance statistics
- React dashboard

---

## Tech Stack

- Backend: Node.js, Express
- Database: PostgreSQL (Docker)
- ORM: Prisma (in progress)
- Frontend: React (planned)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/zardledev/API-Performance-Monitor
cd API-Performance-Monitor
```

---

### 2. Start PostgreSQL (Docker)

```bash
docker-compose up -d
```

---

### 3. Backend setup

```bash
cd backend
npm install
npm run dev
```

---

### 4. Test the API

```text
GET http://localhost:3000/health
```

Response:

```json
{
  "status": "ok",
  "message": "PulseAPI backend is running"
}
```

---

## Project Structure

```text
backend/
└── src/
    ├── app.js
    ├── server.js
    ├── modules/
    │   └── health/
    ├── middlewares/
```

---

## Roadmap

```mermaid
flowchart LR
    A[Express Backend] --> B[Healthcheck Route]
    B --> C["PostgreSQL (Docker)"]
    C --> D[Prisma Setup]
    D --> E[Endpoint CRUD]
    E --> F[API Test Runner]
    F --> G[Performance Stats]
    G --> H[React Dashboard]

    class A,B,C done
    class D inprogress
    class E,F,G,H planned

    classDef done fill:#2ecc71,color:#fff;
    classDef inprogress fill:#f39c12,color:#fff;
    classDef planned fill:#95a5a6,color:#fff;
```

---

## Author

Julian Boi  
Fullstack Developer (React / Node.js)  
Focused on backend performance and API optimization  
Open to remote opportunities