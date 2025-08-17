from fastapi import FastAPI, HTTPException
from typing import Optional
from .models import Task, TaskIn
from . import store

app = FastAPI(title="Bosswallah Tasks API")

# Auto-incrementing ID
_next_id = len(store.tasks_db) + 1

@app.get("/")
async def root():
    return {"message": "Bosswallah Tasks API is running"}

@app.post("/tasks/", response_model=Task)
async def create_task(task_in: TaskIn):
    global _next_id
    task = Task(id=_next_id, **task_in.dict(), completed=False)
    store.add_task(task)
    _next_id += 1
    return task

@app.get("/tasks/", response_model=list[Task])
async def list_tasks(completed: Optional[bool] = None):
    tasks = store.get_tasks()
    if completed is not None:
        tasks = [t for t in tasks if t.completed == completed]
    return tasks

@app.get("/tasks/{task_id}", response_model=Task)
async def get_task(task_id: int):
    task = store.find_task(task_id)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    return task

@app.patch("/tasks/{task_id}/toggle", response_model=Task)
async def toggle_task(task_id: int):
    task = store.find_task(task_id)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    task.completed = not task.completed
    return task

@app.get("/analytics/summary")
async def analytics_summary():
    tasks = store.get_tasks()
    total = len(tasks)
    completed = len([t for t in tasks if t.completed])
    pending = total - completed
    if completed:
        avg_priority = round(sum(t.priority for t in tasks if t.completed) / completed, 1)
    else:
        avg_priority = 0.0
    return {
        "total_tasks": total,
        "completed_tasks": completed,
        "pending_tasks": pending,
        "avg_priority_completed": avg_priority,
    }
