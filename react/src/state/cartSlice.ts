import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./store";

type CartItem = { id:number; name:string; price:number; qty:number };
type State = { items: CartItem[] };

const initialState: State = { items: [] };

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<{id:number; name:string; price:number}>) {
      const ex = state.items.find(i => i.id === action.payload.id);
      if (ex) ex.qty += 1; else state.items.push({ ...action.payload, qty: 1 });
    },
    clearCart(state) { state.items = []; }
  }
});

export const { addToCart, clearCart } = slice.actions;
export default slice.reducer;

export const totalSelector = createSelector(
  (s: RootState) => s.cart.items,
  items => items.reduce((sum, i) => sum + i.price * i.qty, 0)
);
