import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../reducers/themeSlice.js";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
