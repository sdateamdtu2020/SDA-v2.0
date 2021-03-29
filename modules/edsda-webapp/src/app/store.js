import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./slice/api";
import uiReducer from "./slice/ui";

const rootReducer = {
  api: apiReducer,
  ui: uiReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
