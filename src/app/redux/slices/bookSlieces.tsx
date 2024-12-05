// import { createSlice } from "@reduxjs/toolkit";

import { CreateBookWithNewItems } from "@/app/utils";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { setError } from "./errorSlices";

const initialState: Types.IStateBook = {
  books: [],
  isLoadingViaAPI: false,
};
const API = "http://localhost:4000";
export const fetchBook = createAsyncThunk(
  "book/fetchbook",
  async (url: string, thunkAPI) => {
    try {
      const res = await axios.get(`${API}/${url}`);
      if (res?.data) return res.data;
    } catch (error) {
      if(error instanceof Error) {
        thunkAPI.dispatch(setError(error.message))
      }
      return thunkAPI.rejectWithValue(error)
    }
  }
);

const bookSlices = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state: Types.IStateBook, action: PayloadAction<Types.IBook>) => {
      state.books.push(action.payload);
    },
    deleteBook: (state: Types.IStateBook, action: PayloadAction<string>) => {
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    },
    toggleFavorite: (
      state: Types.IStateBook,
      action: PayloadAction<string>
    ) => {
      return state.books.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state) => {
      state.isLoadingViaAPI = true;
    });
    builder.addCase(
      fetchBook.fulfilled,
      (state, action: PayloadAction<Types.IBookDetails>) => {
        if (action?.payload?.title && action?.payload?.author) {
          state.isLoadingViaAPI = false;
          state.books.push(CreateBookWithNewItems(action.payload, "API"));
        }
      }
    );
    builder.addCase(fetchBook.rejected, (state) => {
      state.isLoadingViaAPI = false;
    });
  },
});

export const { addBook, deleteBook, toggleFavorite } = bookSlices.actions;

export const selectBook = (state: RootState) => state.books.books;
export const selectIsLoadingViaAPI = (state: RootState) =>
  state.books.isLoadingViaAPI;
export default bookSlices.reducer;
