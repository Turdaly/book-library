"use client";

import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlices";
import booksReducer from './slices/bookSlieces'
import errorReducer from './slices/errorSlices'
export const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReducer,
    error: errorReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
