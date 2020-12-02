import { createSlice } from "@reduxjs/toolkit";

const votingSlice = createSlice({
  name: "votingSlice",
  initialState: { fetching: true, voteRequests: [], numOfNewVoteRequest: 0 },
  reducers: {
    updateVoteRequestList: (state, action) => {
      state.fetching = false;
      state.voteRequests = action.payload;
      state.numOfNewVoteRequest = action.payload.length;
    },
    // not use anymore, use collapse instead to make some effect improve UX
    removeVotedRequest: (state, action) => {
      state.voteRequests = state.voteRequests.filter((vote) => vote._id !== action.payload._id);
    },
    collapseVoteRequest(state, action) {
      const vote = state.voteRequests.find((vote) => vote._id === action.payload._id);
      vote.in = false;
      state.numOfNewVoteRequest -= 1;
    },
  },
});

export default votingSlice.reducer;
export const { updateVoteRequestList, removeVotedRequest, collapseVoteRequest } = votingSlice.actions;
