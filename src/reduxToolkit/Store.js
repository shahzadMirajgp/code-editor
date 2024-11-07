import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
export const Store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(),
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(Store.dispatch);
