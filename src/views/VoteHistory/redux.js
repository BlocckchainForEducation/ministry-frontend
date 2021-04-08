import { createSlice } from "@reduxjs/toolkit";

const voteHistorySlice = createSlice({
  name: "voteHistorySlice",
  initialState: { fetching: true, ballots: [] },
  reducers: {
    updateVoteHistory: (state, action) => {
      state.fetching = false;
      state.ballots = action.payload;
    },
  },
});

export default voteHistorySlice.reducer;
export const { updateVoteHistory } = voteHistorySlice.actions;
