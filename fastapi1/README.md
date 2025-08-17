# Bosswallah FastAPI Coding Exercise

## Scenario
You are enhancing the **Bosswallah Tasks API**, which tracks tasks for entrepreneurs.  
Currently you can create, list, fetch, and toggle tasks.  

## Your Tasks
1. Implement filtering in `GET /tasks/` using `?completed=true|false`.
2. Complete `GET /analytics/summary` to return:
   ```json
   {
     "total_tasks": int,
     "completed_tasks": int,
     "pending_tasks": int,
     "avg_priority_completed": float
   }
   ```

### How to run
```bash
uvicorn app.main:app --reload
```

Visit [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) for Swagger UI.
