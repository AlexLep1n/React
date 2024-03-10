import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    color: "light",
  },
  reducers: {
    toggleTheme: (state) => {
      state.color === "light"
        ? (state.color = "dark")
        : (state.color = "light");
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
