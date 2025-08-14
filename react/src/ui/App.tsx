import { AppBar, Toolbar, Typography, Container, IconButton, Badge, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ProductList } from "./ProductList";
import { CheckoutForm } from "./CheckoutForm";
import { useUiTheme } from "../state/uiStore";
import { useAppSelector } from "../state/hooks";
import { auth, signInWithGoogle, signOutUser, useAuthUser } from "../utils/firebase";

export default function App() {
  const toggle = useUiTheme(s => s.toggle);
  const cartCount = useAppSelector(s => s.cart.items.reduce((n, it) => n + it.qty, 0));
  const user = useAuthUser();

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>React 19 Interview</Typography>
          <Button color="inherit" onClick={toggle}>Toggle Theme</Button>
          <IconButton color="inherit" sx={{ ml: 1 }} aria-label="cart">
            <Badge badgeContent={cartCount} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          {user ? (
            <Button color="inherit" onClick={signOutUser}>Sign out</Button>
          ) : (
            <Button color="inherit" onClick={signInWithGoogle}>Sign in</Button>
          )}
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 3 }}>
        <Typography variant="h5" gutterBottom>Products</Typography>
        <ProductList />
        <Typography variant="h5" sx={{ mt: 4 }} gutterBottom>Checkout</Typography>
        <CheckoutForm />
        <Typography variant="subtitle1" sx={{ mt: 4 }}>
          TODOs (for the candidate):
        </Typography>
        <ol>
          <li>Add quantity increment/decrement buttons on Product cards and wire to Redux Toolkit.</li>
          <li>Persist cart to <code>localStorage</code> and rehydrate on load.</li>
          <li>Add form validation with React Hook Form (email, address, card last-4) and show MUI errors.</li>
          <li>On submit, call <code>POST /api/checkout</code> via Axios (use the mock in <code>api/client.ts</code>) and handle success/error snackbar.</li>
          <li>Use Zustand to store a global “promo code” and apply 10% discount if code = <code>BOSS10</code>.</li>
        </ol>
      </Container>
    </>
  );
}
