import ClientShop from "./shop-client";
import { Button, AppBar, Toolbar, Typography } from "@mui/material";
import { toggleTheme } from "../toggle";

export default function ShopPage() {
  return (
    <main>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Shop</Typography>
          <form action={toggleTheme}><Button color="inherit" type="submit">Toggle Theme</Button></form>
        </Toolbar>
      </AppBar>
      <ClientShop />
    </main>
  );
}
