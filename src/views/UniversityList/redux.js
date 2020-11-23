import { createSlice } from "@reduxjs/toolkit";

const universityListSlice = createSlice({
  name: "universityListSlice",
  initialState: { fetching: true, universities: [] },
  reducers: {
    setFetchedUniversities: (state, action) => {
      const fetchedUnis = action.payload;
      if (fetchedUnis.length > state.universities) {
        state.fetching = false;
        state.universities = fetchedUnis;
      }
    },
  },
});

export default universityListSlice.reducer;
export const { setFetchedUniversities } = universityListSlice.actions;
