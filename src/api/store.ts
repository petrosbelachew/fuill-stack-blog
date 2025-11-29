import { configureStore } from "@reduxjs/toolkit";
import api from "../api/api.ts";
// Your API slice for fetching post
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
