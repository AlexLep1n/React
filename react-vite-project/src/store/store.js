import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../reducers/themeSlice.js";
import productsReducer from "../reducers/productsSlice.js";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    products: productsReducer,
  },
});
