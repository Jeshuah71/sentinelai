from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.routes import alerts, dashboard

app = FastAPI(
    title="Vultur Sentinel API",
    version="0.1.0",
    description="Mock API for the Vultur Sentinel portfolio prototype.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://localhost:5173"],
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)

app.include_router(dashboard.router, prefix="/api")
app.include_router(alerts.router, prefix="/api")


@app.get("/health")
def health_check() -> dict[str, str]:
    return {"status": "ok"}
