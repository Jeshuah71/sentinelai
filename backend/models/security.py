from pydantic import BaseModel


class Business(BaseModel):
    name: str
    owner: str
    employees: int


class Score(BaseModel):
    value: int
    max: int
    label: str
    change: int
    summary: str


class Task(BaseModel):
    id: int
    priority: str
    category: str
    minutes: int
    title: str
    detail: str
    done: bool = False


class SecurityEvent(BaseModel):
    id: int
    severity: str
    title: str
    meta: str
    detail: str | None = None
    mitre: str | None = None


class NistStatus(BaseModel):
    id: int
    name: str
    status: str
    label: str


class Source(BaseModel):
    id: int
    name: str
    status: str
    label: str


class DashboardResponse(BaseModel):
    business: Business
    score: Score
    tasks: list[Task]
    events: list[SecurityEvent]
    nist: list[NistStatus]
    sources: list[Source]
    totalEvents: int
    totalSources: int
    activeSources: int
