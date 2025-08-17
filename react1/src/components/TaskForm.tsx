import { useForm } from "react-hook-form";
import { Stack, TextField, Button, MenuItem } from "@mui/material";
import type { Task } from "../App";

type Form = {
  title: string;
  description?: string;
  priority: 1|2|3|4|5;
};

export default function TaskForm({ onCreate }: { onCreate: (t: Omit<Task, "id"|"created_at">) => void }) {
  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<Form>({
    mode: "onBlur",
    defaultValues: { title: "", description: "", priority: 3 }
  });

  const onSubmit = (data: Form) => {
    onCreate({ ...data, completed: false });
    reset({ title: "", description: "", priority: 3 });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack direction="row" spacing={2} alignItems="flex-start">
        <TextField
          label="Title"
          sx={{ minWidth: 220 }}
          {...register("title", { required: "Title is required", minLength: { value: 1, message: "Required" } })}
          error={!!errors.title}
          helperText={errors.title?.message}
        />
        <TextField
          label="Description"
          sx={{ minWidth: 260 }}
          {...register("description", { maxLength: { value: 200, message: "Max 200 chars" } })}
          error={!!errors.description}
          helperText={errors.description?.message}
        />
        <TextField
          select
          label="Priority"
          sx={{ width: 140 }}
          defaultValue={3}
          {...register("priority", { required: true })}
        >
          {[1,2,3,4,5].map(p => <MenuItem key={p} value={p}>{p}</MenuItem>)}
        </TextField>
        <Button type="submit" variant="contained" disabled={!isValid}>Add</Button>
      </Stack>
    </form>
  );
}
