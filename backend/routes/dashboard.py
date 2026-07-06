import json
from pathlib import Path

from fastapi import APIRouter

from backend.models.security import DashboardResponse

router = APIRouter(prefix="/dashboard", tags=["dashboard"])

DATA_FILE = Path(__file__).resolve().parents[1] / "data" / "mock_data.json"


def load_dashboard_data() -> dict:
    with DATA_FILE.open("r", encoding="utf-8") as data_file:
        return json.load(data_file)


@router.get("", response_model=DashboardResponse)
def get_dashboard() -> dict:
    return load_dashboard_data()


@router.get("/briefing")
def get_weekly_briefing() -> dict[str, str]:
    data = load_dashboard_data()
    open_tasks = [task for task in data["tasks"] if not task.get("done")]
    task_lines = "\n".join(
        f"- [{task['priority']}] {task['title']} (~{task['minutes']} min)"
        for task in open_tasks
    )

    briefing = "\n".join(
        [
            "Vultur Sentinel Weekly Briefing",
            data["business"]["name"],
            "",
            f"Security posture: {data['score']['value']}/{data['score']['max']} ({data['score']['label']})",
            data["score"]["summary"],
            "",
            f"Open tasks ({len(open_tasks)}):",
            task_lines,
        ]
    )

    return {"format": "text/plain", "content": briefing}
