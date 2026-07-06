# Vultur Sentinel

Vultur Sentinel is a portfolio cybersecurity advisor prototype for small businesses. It turns noisy security events into a short weekly briefing with a posture score, plain-English risk explanations, NIST CSF coverage, connected data sources, and a task plan.

This project is intentionally presented as a high-fidelity prototype, not a live security product. The frontend uses bundled mock data, and the backend folder provides matching mock FastAPI endpoints that show the intended API shape.

## Live Scope

- React + Vite single-page app
- Home page and dashboard views
- Real URL routing for `/` and `/dashboard`
- Persisted task completion using `localStorage`
- Downloadable weekly briefing text file
- Responsive layouts for desktop, tablet, and mobile
- Mock FastAPI API for dashboard and alert data
- Data validation test script
- Vercel deployment config

## Tech Stack

- React 19
- Vite
- Oxlint
- FastAPI
- Pydantic
- Vercel

## Frontend Setup

```bash
npm install
npm run dev
```

The Vite app runs at:

```text
http://localhost:5173
```

## Backend Setup

The backend is optional for the portfolio demo because the deployed frontend reads bundled mock data. To run the mock API locally:

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cd ..
uvicorn backend.main:app --reload
```

Available API routes:

```text
GET /health
GET /api/dashboard
GET /api/dashboard/briefing
GET /api/alerts
```

## Quality Checks

```bash
npm run lint
npm run test
npm run build
```

## Portfolio Notes

This project demonstrates:

- Product thinking for a security tool aimed at non-technical business owners
- UI composition for risk summary, security events, task prioritization, and standards mapping
- State management with persistence
- Responsive design
- Frontend deployment readiness
- A mock backend contract that could later be connected to real integrations

## What Would Be Needed For A Real Production Product

- Real authentication and account management
- Database-backed tenants, tasks, alerts, and user actions
- Secure integrations with Google Workspace, Microsoft 365, endpoint logs, and firewall exports
- Background jobs for event ingestion and scoring
- Authorization rules and audit logs
- End-to-end tests and backend tests
- Monitoring, logging, rate limiting, and production secrets management
- Formal security review before handling customer data
