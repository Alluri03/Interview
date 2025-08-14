"use client";
import { create } from "zustand";
type Ui = { mode:"light"|"dark"; toggle: () => void };
export const useUiTheme = create<Ui>((set) => ({
  mode: "light",
  toggle: () => set(s => ({ mode: s.mode === "light" ? "dark" : "light" }))
}));
