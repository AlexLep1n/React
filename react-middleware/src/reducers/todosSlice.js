import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "../middlewares/AsyncThunkMiddleware";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    value: {
      entities: [],
      status: "idle",
      error: false,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.value.status = "loading";
    });
    builder.addCase(fetchTodos.fulfilled, (state, { payload: todos }) => {
      state.value.status = "success";
      state.value.entities = todos;
      state.value.error = false;
    });
    builder.addCase(fetchTodos.rejected, (state) => {
      state.value.status = "failure";
      state.value.error = true;
    });
  },
});

export default todosSlice.reducer;
