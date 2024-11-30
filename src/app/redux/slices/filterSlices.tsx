import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState: Types.FilterState = {
  title: "",
  author: "",
  onlyFavorite: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTitleFilter: (state: Types.FilterState, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setAuthorFilter: (state: Types.FilterState, action: PayloadAction<string>) => {
      state.author = action.payload;
    },
    setOnlyFavoriteFilter: (state: Types.FilterState) => {
      state.onlyFavorite = !state.onlyFavorite;
    },
    resetFilters: () => initialState,
  },
});

export const {
  setTitleFilter,
  resetFilters,
  setAuthorFilter,
  setOnlyFavoriteFilter,
} = filterSlice.actions;

export const selectTitleFilter = (state: { filter: Types.FilterState }) => state.filter.title;
export const selectAuthorFilter = (state: { filter: Types.FilterState }) => state.filter.author;
export const selectOnlyFavoriteFilter = (state: { filter: Types.FilterState }) => state.filter.onlyFavorite;

export default filterSlice.reducer;
