import { useMemo, useState } from "react";
import { AppBar, Toolbar, Typography, Container, Paper, Box, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Analytics from "./components/Analytics";

export type Task = {
  id: number;
  title: string;
  description?: string | null;
  priority: 1|2|3|4|5;
  completed: boolean;
  created_at: string; // ISO
};

type Filter = "All" | "Completed" | "Pending";

const seed: Task[] = [
  { id: 1, title: "Verify vendor KYC", description: "GST + PAN for onboarding", priority: 4, completed: true,  created_at: new Date().toISOString() },
  { id: 2, title: "Create onboarding checklist", description: "Bosswallah experts", priority: 3, completed: false, created_at: new Date().toISOString() },
  { id: 3, title: "Schedule demo webinar", description: "Intro for new users", priority: 5, completed: false, created_at: new Date().toISOString() },
];

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(seed);
  const [filter, setFilter] = useState<Filter>("All");

  const addTask = (t: Omit<Task, "id" | "created_at">) => {
    const nextId = tasks.length ? Math.max(...tasks.map(x => x.id)) + 1 : 1;
    setTasks(prev => [...prev, { ...t, id: nextId, created_at: new Date().toISOString() }]);
  };

  const toggle = (id: number) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const filtered = useMemo(() => {
    // TODO (1): Filter by completion based on `filter` value.
    // - "All" => return all tasks
    // - "Completed" => only tasks with completed = true
    // - "Pending" => only tasks with completed = false
    // ----- START TODO (1) -----
    return tasks;
    // ----- END TODO (1) -----
  }, [tasks, filter]);

  const onFilterChange = (e: SelectChangeEvent) => setFilter(e.target.value as Filter);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Bosswallah – React Tasks</Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 3 }}>
        <Paper sx={{ p: 2, mb: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>Add Task</Typography>
          <TaskForm onCreate={addTask} />
        </Paper>

        <Paper sx={{ p: 2, mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Typography variant="subtitle1">Filter:</Typography>
            <Select size="small" value={filter} onChange={onFilterChange}>
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
            </Select>
          </Box>
          <TaskList tasks={filtered} onToggle={toggle} />
        </Paper>

        <Paper sx={{ p: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>Analytics</Typography>
          <Analytics tasks={tasks} />
        </Paper>
      </Container>
    </>
  );
}
