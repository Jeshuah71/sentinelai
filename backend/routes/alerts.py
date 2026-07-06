from fastapi import APIRouter

from backend.routes.dashboard import load_dashboard_data

router = APIRouter(prefix="/alerts", tags=["alerts"])


@router.get("")
def list_alerts() -> dict:
    data = load_dashboard_data()
    actionable = [
        event for event in data["events"]
        if event["severity"] in {"HIGH", "MED"}
    ]

    return {
        "count": len(actionable),
        "items": actionable,
    }
