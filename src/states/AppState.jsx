import { create } from "zustand";

export const AppState = create((set) => ({
  appName: "MIO Go",
  version: "1.0.1",
}));
