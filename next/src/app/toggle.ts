"use server";
import { toggleThemeServer } from "../state/uiServer";
export async function toggleTheme() { await toggleThemeServer(); }
