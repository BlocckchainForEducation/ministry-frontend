import { createSlice } from "@reduxjs/toolkit";

const votedHistorySlice = createSlice({
  name: "votedHistorySlice",
  initialState: { fetching: true, voted: [] },
  reducers: {
    setFetchedVoted: (state, action) => {
      state.fetching = false;
      const fetchedVoted = action.payload;
      if (fetchedVoted.length > state.voted) {
        state.voted = fetchedVoted;
      }
    },
  },
});

export default votedHistorySlice.reducer;
export const { setFetchedVoted } = votedHistorySlice.actions;
