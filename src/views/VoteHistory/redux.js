import { createSlice } from "@reduxjs/toolkit";

const voteHistorySlice = createSlice({
  name: "voteHistorySlice",
  initialState: { fetching: true, voteHistory: [] },
  reducers: {
    updateVoteHistory: (state, action) => {
      state.fetching = false;
      state.voteHistory = action.payload;
    },
  },
});

export default voteHistorySlice.reducer;
export const { updateVoteHistory } = voteHistorySlice.actions;
