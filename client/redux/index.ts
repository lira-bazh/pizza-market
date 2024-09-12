import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const initialState = {};

export const store = configureStore({
  reducer: {}
});