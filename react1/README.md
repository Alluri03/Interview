# Bosswallah – ReactJS Coding Exercise (15–20 min)

A tiny React (Vite + TS + MUI) app mirroring the FastAPI exercise.

## What the candidate sees
Two TODOs:
1) **Filter** the task list by completion from the dropdown (`All / Completed / Pending`).
2) **Analytics**: compute `total_tasks`, `completed_tasks`, `pending_tasks`, `avg_priority_completed (1 decimal, 0.0 if none)`.

Both TODO blocks are clearly marked inside the code.

## Run
```bash
npm install
npm run dev
```

Open the preview link. No backend required.

## Evaluation
- Correct filtering logic
- Correct analytics (including 0.0 average when none completed)
- Clean React/TS code, simple state management, presentable MUI UI
