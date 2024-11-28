import { PayloadAction } from "@reduxjs/toolkit";
import * as a from "./actionType";

const initialState: Types.IBook[] = [];

const booksReducer = (state = initialState, action: PayloadAction) => {
  switch (action.type) {
    case a.ADD_BOOK:
      return [...state, action.payload];

    case a.DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    case a.TOGGLE_FAVORITE:
      return state.map((book) =>
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      );
    default:
      return state;
  }
};

export default booksReducer;
