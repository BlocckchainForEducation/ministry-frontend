import { createSlice } from "@reduxjs/toolkit";

const votingViewSlice = createSlice({
  name: "votingViewSlice",
  initialState: { fetchingNewVoteRequests: true, newVoteRequests: [] },
  reducers: {
    setNewVoteRequests: (state, action) => {
      state.fetchingNewVoteRequests = false;
      state.newVoteRequests = action.payload;
    },
    changeVoteState: (state, action) => {
      state.newVoteRequests = state.newVoteRequests.filter((vote) => vote._id !== action.payload._id);
    },
  },
});

export default votingViewSlice.reducer;
export const { setNewVoteRequests, changeVoteState } = votingViewSlice.actions;
