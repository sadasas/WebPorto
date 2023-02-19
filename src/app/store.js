import { configureStore } from "@reduxjs/toolkit";
import hamburgerToggleReducer from "../features/hamburger/hamburgerToggleSlice";

export const store = configureStore({
  reducer: {
    hamburgerToggle: hamburgerToggleReducer,
  },
});
