import { Checkbox, List, ListItem, ListItemIcon, ListItemText, Chip } from "@mui/material";
import type { Task } from "../App";

export default function TaskList({ tasks, onToggle }: { tasks: Task[]; onToggle: (id:number)=>void }) {
  if (!tasks.length) return <div>No tasks</div>;
  return (
    <List>
      {tasks.map(t => (
        <ListItem key={t.id} secondaryAction={<Chip size="small" label={`P${t.priority}`} />}>
          <ListItemIcon>
            <Checkbox checked={t.completed} onChange={() => onToggle(t.id)} />
          </ListItemIcon>
          <ListItemText
            primary={t.title}
            secondary={t.description ?? ""}
            sx={{ textDecoration: t.completed ? "line-through" : "none" }}
          />
        </ListItem>
      ))}
    </List>
  );
}
