import { configureStore } from "@reduxjs/toolkit";
import votingReducer from "./views/Voting/redux";
import uniListReducer from "./views/UniversityList/redux";
import votedHistoryReducer from "./views/VoteHistory/redux";
export default configureStore({
  reducer: { votingSlice: votingReducer, universityListSlice: uniListReducer, voteHistorySlice: votedHistoryReducer },
});
