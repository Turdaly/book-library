// import { createSlice } from "@reduxjs/toolkit";

import { CreateBookWithNewItems } from "@/app/utils";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

const initialState: Types.IBook[] = [];
const API = 'http://localhost:4000'
export const fetchBook = createAsyncThunk(
  "book/fetchbook",
  async (url: string) => {
    try {
      const res = await axios.get(`${API}/${url}`);
      if (res?.data) return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const bookSlices = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state: Types.IBook[], action: PayloadAction<Types.IBook>) => {
      state.push(action.payload);
    },
    deleteBook: (state: Types.IBook[], action: PayloadAction<string>) => {
      return state.filter((book) => book.id !== action.payload);
    },
    toggleFavorite: (state: Types.IBook[], action: PayloadAction<string>) => {
      return state.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchBook.fulfilled,
      (state, action: PayloadAction<Types.IBookDetails>) => {
        if (action.payload.title && action.payload.author) {
          state.push(CreateBookWithNewItems(action.payload, "API"));
        }
      }
    );
    builder.addCase(fetchBook.rejected, (state, action) => {});
  },
});

export const { addBook, deleteBook, toggleFavorite } = bookSlices.actions;

export const selectBook = (state: RootState) => state.books;
export default bookSlices.reducer;
