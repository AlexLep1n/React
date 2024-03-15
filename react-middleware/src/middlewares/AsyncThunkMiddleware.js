import { createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   fetchRequest,
//   fetchSuccess,
//   fetchFailure,
// } from "../reducers/todosSlice";
// import { useDispatch } from "react-redux";

const API_URL = "https://jsonplaceholder.typicode.com/todos?userId=1";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async function () {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Request failed, status ${response.status}`);
    }

    const data = await response.json();
    return data;
  }
);
