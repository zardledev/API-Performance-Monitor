# PulseAPI (API Performance Monitor)

A fullstack application designed to monitor, analyze and optimize API performance.

---

## Overview

PulseAPI is a project focused on measuring API performance and providing insights on latency, reliability and efficiency.

This project demonstrates practical skills in:
- backend architecture design
- REST API development with Node.js
- database integration with PostgreSQL
- ORM usage with Prisma
- input validation and error handling
- building scalable and maintainable applications

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

### Next Steps
- API performance test runner
- Response time tracking
- Performance statistics
- React dashboard

---

## Tech Stack

- Backend: Node.js, Express
- Database: PostgreSQL (Docker)
- ORM: Prisma
- Validation: Zod
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

---

#### Get all endpoints

```http
GET /api/endpoints
```

---

#### Get endpoint by id

```http
GET /api/endpoints/:id
```

---

#### Update endpoint

```http
PUT /api/endpoints/:id
```

---

#### Delete endpoint

```http
DELETE /api/endpoints/:id
```

---

## Validation

All inputs are validated using Zod.

Example of validation errors:

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
│   │   └── endpoints/
│   │       ├── endpoint.routes.js
│   │       ├── endpoint.controller.js
│   │       ├── endpoint.service.js
│   │       ├── endpoint.repository.js
│   │       └── endpoint.validation.js
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

    class A,B,C,D,E done
    class F,G,H planned

    classDef done fill:#2ecc71,color:#fff;
    classDef planned fill:#95a5a6,color:#fff;
```

---

## Author

Julian Boi  
Fullstack Developer (React / Node.js)  
Focused on backend performance and API optimization  
Open to remote opportunities