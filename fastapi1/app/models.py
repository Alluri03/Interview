from pydantic import BaseModel
from typing import Optional

class TaskIn(BaseModel):
    title: str
    description: Optional[str] = None
    priority: int = 3

class Task(TaskIn):
    id: int
    completed: bool = False
