import { create } from "zustand";

type UiState = { mode: "light" | "dark"; toggle: () => void };
export const useUiTheme = create<UiState>((set) => ({
  mode: "light",
  toggle: () => set(s => ({ mode: s.mode === "light" ? "dark" : "light" }))
}));
