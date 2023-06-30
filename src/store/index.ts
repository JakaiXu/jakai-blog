import { configureStore } from "@reduxjs/toolkit";
import { contactApi } from "./api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(contactApi.middleware)
});

setupListeners(store.dispatch)
export * from './api'