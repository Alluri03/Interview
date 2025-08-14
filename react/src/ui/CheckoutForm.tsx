import { useForm } from "react-hook-form";
import { TextField, Button, Stack, Snackbar, Alert, Typography } from "@mui/material";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../state/hooks";
import { api } from "../utils/api/client";
import { clearCart, totalSelector } from "../state/cartSlice";

type Form = { email:string; address:string; cardLast4:string; };

export function CheckoutForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<Form>({ mode: "onBlur" });
  const [snack, setSnack] = useState<{open:boolean; msg:string; sev:"success"|"error"}>({open:false, msg:"", sev:"success"});
  const total = useAppSelector(totalSelector);
  const dispatch = useAppDispatch();

  const onSubmit = async (data: Form) => {
    try {
      const res = await api.post("/checkout", { ...data, total });
      setSnack({ open: true, msg: `Order ${res.data.orderId} placed`, sev: "success" });
      dispatch(clearCart());
    } catch (e:any) {
      setSnack({ open: true, msg: e?.message ?? "Failed", sev: "error" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>Total: ₹{total.toFixed(2)}</Typography>
      <Stack direction="column" spacing={2}>
        <TextField label="Email" {...register("email", { required: "Email is required" })} error={!!errors.email} helperText={errors.email?.message}/>
        <TextField label="Address" {...register("address", { required: "Address is required" })} error={!!errors.address} helperText={errors.address?.message}/>
        <TextField label="Card Last 4" inputProps={{ inputMode: "numeric", maxLength: 4 }} {...register("cardLast4", { required: "Last 4 required", minLength: {value:4, message:"4 digits"}, maxLength:{value:4, message:"4 digits"} })} error={!!errors.cardLast4} helperText={errors.cardLast4?.message}/>
        <Button variant="contained" type="submit">Place Order</Button>
      </Stack>
      <Snackbar open={snack.open} autoHideDuration={3000} onClose={() => setSnack(s => ({...s, open:false}))}>
        <Alert severity={snack.sev} variant="filled">{snack.msg}</Alert>
      </Snackbar>
    </form>
  );
}
