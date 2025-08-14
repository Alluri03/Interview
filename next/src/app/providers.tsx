"use client";
import React from "react";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { store } from "../state/store";
import { useUiTheme } from "../state/uiStore";

export default function Providers({ children }: { children: React.ReactNode }) {
  const mode = useUiTheme(s => s.mode);
  const theme = React.useMemo(() => createTheme({ palette: { mode } }), [mode]);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Provider>
  );
}
