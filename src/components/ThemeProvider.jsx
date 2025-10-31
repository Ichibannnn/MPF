// src/components/Portfolio/ThemeProvider.jsx
import React, {
  createContext,
  useMemo,
  useState,
  useContext,
  useEffect,
} from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";

const ThemeToggleContext = createContext({ theme: "dark", toggle: () => {} });

export const useThemeToggle = () => useContext(ThemeToggleContext);

export default function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    try {
      const saved = localStorage.getItem("pref-theme");
      if (saved) return saved;
      return window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("pref-theme", mode);
    } catch {}
  }, [mode]);

  const toggle = () => setMode((m) => (m === "dark" ? "light" : "dark"));

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "dark"
            ? {
                primary: { main: "#fbbf24" }, // yellow accent
                background: { default: "#0a192f", paper: "#071129" },
              }
            : {
                primary: { main: "#b45309" },
                background: { default: "#ffffff", paper: "#f7f7f8" },
              }),
        },
        typography: {
          fontFamily:
            '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
        },
        components: {
          MuiButton: { defaultProps: { disableElevation: true } },
        },
      }),
    [mode]
  );

  return (
    <ThemeToggleContext.Provider value={{ theme: mode, toggle }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeToggleContext.Provider>
  );
}
