import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getApiCnfiguratuon: (state, action) => {state.url = action.payload},
    getGenres: (state, action) => {state.genres = action.payload},
  },
});

export const { getApiCnfiguratuon, getGenres } = homeSlice.actions;

export default homeSlice.reducer;
