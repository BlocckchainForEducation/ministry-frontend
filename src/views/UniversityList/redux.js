import { createSlice } from "@reduxjs/toolkit";

const universityListSlice = createSlice({
  name: "universityListSlice",
  initialState: { fetching: true, universities: [] },
  reducers: {
    setFetchedUniversities: (state, action) => {
      state.fetching = false;
      state.universities = action.payload;
    },
  },
});

export default universityListSlice.reducer;
export const { setFetchedUniversities } = universityListSlice.actions;
