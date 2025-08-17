from .models import Task

# Seed data for Bosswallah
tasks_db = [
    Task(id=1, title="Verify vendor KYC", description="Check GSTIN validity", priority=5, completed=False),
    Task(id=2, title="Create onboarding checklist", description="Steps for new entrepreneurs", priority=3, completed=True),
    Task(id=3, title="Schedule demo webinar", description="Product demo for SMEs", priority=4, completed=False),
]

def get_tasks():
    return tasks_db

def add_task(task: Task):
    tasks_db.append(task)

def find_task(task_id: int):
    return next((t for t in tasks_db if t.id == task_id), None)
