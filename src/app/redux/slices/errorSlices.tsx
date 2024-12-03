import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = ''

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action) => {
      return action.payload
    },
    cleanError: () => {
      return initialState
    }
  }
})

export const { setError, cleanError } = errorSlice.actions
export const selectorErrorMessage = (state: RootState) => state.error
export default errorSlice.reducer