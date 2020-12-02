import { createSlice } from "@reduxjs/toolkit";

const votingSlice = createSlice({
  name: "votingSlice",
  initialState: { fetching: true, voteRequests: [] },
  reducers: {
    updateVoteRequestList: (state, action) => {
      state.fetching = false;
      state.voteRequests = action.payload;
    },
    removeVotedRequest: (state, action) => {
      state.voteRequests = state.voteRequests.filter((vote) => vote._id !== action.payload._id);
    },
  },
});

export default votingSlice.reducer;
export const { updateVoteRequestList, removeVotedRequest } = votingSlice.actions;
