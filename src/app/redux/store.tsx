"use client";

import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlices";
import booksReducer from './slices/bookSlieces'

export const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
