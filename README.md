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
- Modular architecture (controllers, services, etc.)
- Healthcheck endpoint
- PostgreSQL setup with Docker

### Next Steps
- Prisma integration
- Endpoint management (CRUD)
- API performance testing
- Performance statistics
- React dashboard

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

### 3. Backend setup

```bash
cd backend
npm install
npm run dev
```

### 4. Start PostgreSQL (Docker)

```bash
docker-compose up -d
```


### 5. Test the API
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

### 6. Project Structure
```
backend/
└── src/
    ├── app.js
    ├── server.js
    ├── modules/
    │   └── health/
    ├── middlewares/

```
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
    class D,E,F,G,H planned

    classDef done fill:#2ecc71,color:#fff;
    classDef planned fill:#95a5a6,color:#fff;
```



## Author

Julian Boi - Fullstack Developer | React • Node.js • API Optimization • Web Performance | Remote-ready
