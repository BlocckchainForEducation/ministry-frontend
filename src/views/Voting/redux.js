import { createSlice } from "@reduxjs/toolkit";

const votingViewSlice = createSlice({
  name: "votingViewSlice",
  initialState: { fetchingNewVoteRequests: true, newVoteRequests: [], shouldShowHistory: false, votedRequests: [] },
  reducers: {
    setNewVoteRequests: (state, action) => {
      state.fetchingNewVoteRequests = false;
      state.newVoteRequests = action.payload;
    },
    pushFetchedVotedRequests: (state, action) => {
      state.votedRequests.push(...action.payload);
      state.shouldShowHistory = true;
    },
    changeVoteState: (state, action) => {
      const voteRequest = state.newVoteRequests.find((vote) => vote._id === action.payload._id);
      voteRequest.state = action.payload.state;
      state.votedRequests.push(voteRequest);
      state.newVoteRequests = state.newVoteRequests.filter((vote) => vote._id !== action.payload._id);
    },
  },
});

export default votingViewSlice.reducer;
export const { setNewVoteRequests, pushFetchedVotedRequests, changeVoteState } = votingViewSlice.actions;
