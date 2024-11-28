"use client";

import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books/reducer";
import filterReducer from "./slices/filterSlices";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
