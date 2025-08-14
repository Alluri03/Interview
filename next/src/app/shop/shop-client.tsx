"use client";
import { useEffect, useState } from "react";
import { Button, Card, CardActions, CardContent, Grid, Snackbar, Alert, TextField, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { addToCart, clearCart, totalSelector } from "../../state/cartSlice";
import { useForm } from "react-hook-form";
import { signInWithGoogle, signOutUser, useAuthUser } from "../../utils/firebase";

type Product = { id:number; name:string; price:number };
type Form = { email:string; address:string; cardLast4:string };

export default function ClientShop() {
  const [items, setItems] = useState<Product[]>([]);
  const [snack, setSnack] = useState<{open:boolean; msg:string; sev:"success"|"error"}>({open:false, msg:"", sev:"success"});
  const dispatch = useAppDispatch();
  const total = useAppSelector(totalSelector);
  const { register, handleSubmit, formState: { errors } } = useForm<Form>({ mode:"onBlur" });
  const user = useAuthUser();

  useEffect(() => {
    axios.get("/api/products").then(r => setItems(r.data));
  }, []);

  const submit = async (data: Form) => {
    try {
      // naive "checkout"
      await new Promise(r => setTimeout(r, 300));
      setSnack({ open: true, msg: `Order placed for ₹${total.toFixed(2)}`, sev: "success" });
      dispatch(clearCart());
    } catch (e:any) {
      setSnack({ open: true, msg: e?.message ?? "Failed", sev: "error" });
    }
  };

  return (
    <div style={{ padding: 16, maxWidth: 900, margin: "0 auto" }}>
      <Typography variant="h5" gutterBottom>Products</Typography>
      <Grid container spacing={2}>
        {items.map(p => (
          <Grid item xs={12} md={6} lg={4} key={p.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{p.name}</Typography>
                <Typography variant="body2">₹{p.price.toFixed(2)}</Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" onClick={() => dispatch(addToCart({ id: p.id, name: p.name, price: p.price }))}>
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" sx={{ mt: 3 }}>Checkout</Typography>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>Total: ₹{total.toFixed(2)}</Typography>

      <form onSubmit={handleSubmit(submit)} noValidate>
        <Stack spacing={2}>
          <TextField label="Email" {...register("email", { required: "Email is required" })} error={!!errors.email} helperText={errors.email?.message} />
          <TextField label="Address" {...register("address", { required: "Address is required" })} error={!!errors.address} helperText={errors.address?.message} />
          <TextField label="Card Last 4" inputProps={{ inputMode:"numeric", maxLength: 4 }} {...register("cardLast4", { required: "Last 4 required", minLength: { value: 4, message: "4 digits" }, maxLength: { value: 4, message: "4 digits" }})} error={!!errors.cardLast4} helperText={errors.cardLast4?.message} />
          <Stack direction="row" spacing={1}>
            {user ? (
              <Button variant="outlined" onClick={signOutUser}>Sign out</Button>
            ) : (
              <Button variant="outlined" onClick={signInWithGoogle}>Sign in</Button>
            )}
            <Button variant="contained" type="submit">Place Order</Button>
          </Stack>
        </Stack>
      </form>

      <section style={{ marginTop: 24 }}>
        <Typography variant="subtitle1">Interview TODOs:</Typography>
        <ol>
          <li>Add quantity controls per product and show cart badge in an AppBar action.</li>
          <li>Persist cart in Redux + <code>localStorage</code> (rehydrate on load).</li>
          <li>Add a global promo code with Zustand (<code>BOSS10</code> ⇒ 10% off) and reflect in total.</li>
          <li>Validate form fields and show MUI errors; disable submit while invalid.</li>
          <li>Move product fetch to a server component and stream skeletons.</li>
        </ol>
      </section>

      <Snackbar open={snack.open} autoHideDuration={3000} onClose={() => setSnack(s => ({...s, open:false}))}>
        <Alert severity={snack.sev} variant="filled">{snack.msg}</Alert>
      </Snackbar>
    </div>
  );
}
