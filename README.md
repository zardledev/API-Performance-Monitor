# PulseAPI (API Performance Monitor)

A backend application designed to monitor, analyze and optimize API performance.

---

## Overview

PulseAPI is a backend service that allows developers to register API endpoints, run tests against them, and analyze their performance over time.

It focuses on response time, reliability, and API health through stored test results and aggregated statistics.

This project demonstrates practical skills in:
- backend architecture design
- REST API development with Node.js
- database integration with PostgreSQL
- ORM usage with Prisma
- input validation and error handling
- performance measurement and metrics aggregation
- building scalable and maintainable applications

---

## Dashboard Preview

Current React dashboard preview:

![PulseAPI dashboard](docs/ressources/img/pulseapi-dashboard-preview.png)

Expected file path: `docs/ressources/img/pulseapi-dashboard-preview.png`

---

## Current Status

Project in progress.

### Completed
- Express backend initialization
- Modular architecture (routes, controllers, services, repositories)
- Healthcheck endpoint
- PostgreSQL setup with Docker
- Prisma integration
- Endpoint CRUD API
- Input validation with Zod
- API test runner with response time tracking
- Endpoint performance statistics
- React dashboard foundation

### Next Steps
- Global metrics aggregation
- Automated test scheduling
- React dashboard

---

## Tech Stack

- Backend: Node.js, Express
- Database: PostgreSQL (Docker)
- ORM: Prisma
- Validation: Zod
- HTTP Client: Axios
- Frontend: React

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

### 4. Environment variables

Create a `.env` file in `backend/`:

```env
PORT=3000
DATABASE_URL="postgresql://pulseapi_user:pulseapi_password@localhost:5432/pulseapi?schema=public"
```

---

## API Endpoints

### Healthcheck

```http
GET /health
```

---

### Endpoints CRUD

#### Create endpoint

```http
POST /api/endpoints
```

```json
{
  "name": "JSON Placeholder Users",
  "url": "https://jsonplaceholder.typicode.com/users",
  "method": "GET",
  "description": "Test API"
}
```

#### Get all endpoints

```http
GET /api/endpoints
```

#### Get endpoint by id

```http
GET /api/endpoints/:id
```

#### Update endpoint

```http
PUT /api/endpoints/:id
```

#### Delete endpoint

```http
DELETE /api/endpoints/:id
```

---

### Run API test

```http
POST /api/endpoints/:id/test
```

Example response:

```json
{
  "id": "test-id",
  "endpointId": "endpoint-id",
  "status": 200,
  "duration": 57,
  "success": true,
  "createdAt": "2026-04-05T10:30:00.000Z"
}
```

---

### Get endpoint statistics

```http
GET /api/endpoints/:id/stats
```

Example response:

```json
{
  "total": 12,
  "avgDuration": 83.5,
  "minDuration": 41,
  "maxDuration": 152,
  "p95Duration": 152,
  "p99Duration": 152,
  "successCount": 10,
  "failureCount": 2,
  "successRate": 83.33333333333334,
  "failureRate": 16.666666666666664,
  "lastTestAt": "2026-04-05T12:41:15.203Z"
}
```

---

## Validation

All endpoint inputs are validated using Zod.

Example error response:

```json
{
  "status": "error",
  "message": "Validation failed",
  "errors": [
    {
      "field": "url",
      "message": "URL must be a valid URL"
    }
  ]
}
```

---

## Git Branches

The project uses feature branches to keep each milestone isolated and easy to review.

| Branch | Purpose |
| --- | --- |
| `main` | Stable integration branch containing the current state of the project. |
| `feature/prisma-setup` | Sets up Prisma and connects the backend to PostgreSQL. |
| `feature/endpoints-crud` | Implements endpoint creation, listing, update, and deletion. |
| `feature/endpoints-validation` | Adds Zod validation for endpoint payloads and request safety. |
| `feature/api-test-runner` | Adds the test runner that executes requests and stores response metrics. |
| `feature/performance-stats` | Adds endpoint statistics and aggregated performance metrics. |
| `feature/react-dashboard` | Introduces the React frontend dashboard for interacting with monitors. |

---

## Project Structure

```text
backend/
├── src/
│   ├── app.js
│   ├── server.js
│   ├── lib/
│   │   └── prisma.js
│   ├── modules/
│   │   ├── health/
│   │   ├── endpoints/
│   │   │   ├── endpoint.routes.js
│   │   │   ├── endpoint.controller.js
│   │   │   ├── endpoint.service.js
│   │   │   ├── endpoint.repository.js
│   │   │   └── endpoint.validation.js
│   │   └── tests/
│   │       ├── test.routes.js
│   │       ├── test.controller.js
│   │       ├── test.service.js
│   │       └── test.repository.js
│   ├── middlewares/
│   │   └── validate.js
├── prisma/
│   └── schema.prisma
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

    class A,B,C,D,E,F,G,H done

    classDef done fill:#2ecc71,color:#fff;
    classDef planned fill:#95a5a6,color:#fff;
```

---

## Author

Julian Boi  
Fullstack Developer (React / Node.js)  
Focused on backend performance and API optimization  
Open to remote opportunities
