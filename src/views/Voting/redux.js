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
    collapseVoteRequest(state, action) {
      const index = state.voteRequests.findIndex((vote) => vote.publicKey === action.payload.publicKey);
      state.voteRequests[index].in = false;
      state.numOfNewVoteRequest -= 1;
    },
  },
});

export default votingSlice.reducer;
export const { updateVoteRequestList, removeVotedRequest, collapseVoteRequest } = votingSlice.actions;
