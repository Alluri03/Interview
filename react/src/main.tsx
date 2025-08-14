import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import App from "./ui/App";
import { store } from "./state/store";
import { useUiTheme } from "./state/uiStore";

function ThemedApp() {
  const themeMode = useUiTheme(s => s.mode);
  const theme = React.useMemo(() => createTheme({ palette: { mode: themeMode } }), [themeMode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemedApp />
    </Provider>
  </React.StrictMode>
);
