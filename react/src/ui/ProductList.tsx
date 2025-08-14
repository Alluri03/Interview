import { Button, Card, CardContent, CardActions, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "../utils/api/client";
import { useAppDispatch } from "../state/hooks";
import { addToCart } from "../state/cartSlice";

type Product = { id:number; name:string; price:number };

export function ProductList() {
  const [items, setItems] = useState<Product[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    api.get("/products").then(r => setItems(r.data));
  }, []);

  return (
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
  );
}
