import { Stack, Paper, Typography } from "@mui/material";
import type { Task } from "../App";

type Props = { tasks: Task[] };

export default function Analytics({ tasks }: Props) {
  // TODO (2): Compute the analytics object.
  // Return:
  // {
  //   total_tasks,
  //   completed_tasks,
  //   pending_tasks,
  //   avg_priority_completed  // 1 decimal, 0.0 if none completed
  // }
  // ----- START TODO (2) -----
  const total_tasks = tasks.length;
  const completed_tasks = 0;
  const pending_tasks = total_tasks;
  const avg_priority_completed = 0.0;
  // ----- END TODO (2) -----

  return (
    <Stack direction="row" spacing={2}>
      <Stat label="Total" value={total_tasks} />
      <Stat label="Completed" value={completed_tasks} />
      <Stat label="Pending" value={pending_tasks} />
      <Stat label="Avg Priority (Done)" value={avg_priority_completed.toFixed(1)} />
    </Stack>
  );
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <Paper sx={{ p: 2, minWidth: 160 }} variant="outlined">
      <Typography variant="caption" color="text.secondary">{label}</Typography>
      <Typography variant="h6">{value}</Typography>
    </Paper>
  );
}
