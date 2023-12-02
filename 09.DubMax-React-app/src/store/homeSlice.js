import { createSlice } from "@reduxjs/toolkit";
console.log("fgrf")

export const homeSlice = createSlice({
  name: "counter",
  initialState: {

    url:{name :"jsdev"},
    genres:{},

  },
  reducers: {
  getApiCnfiguratuon:(state,action) =>{state.genres=action.payload},
  getGenres:(state,action) =>{state.url=action.payload;}
  },
});

// Action creators are generated for each case reducer function
export const { getApiCnfiguratuon, getGenres } = homeSlice.actions;

export default homeSlice.reducer;
