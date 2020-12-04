import { combineReducers, configureStore } from "@reduxjs/toolkit";
import votingReducer from "./views/Voting/redux";
import uniListReducer from "./views/UniversityList/redux";
import votedHistoryReducer from "./views/VoteHistory/redux";

export const resetStore = () => {
  return {
    type: "RESET_STORE",
  };
};

const rootReducer = (state, action) => {
  if (action.type === "RESET_STORE") {
    state = undefined;
  }
  return appReducer(state, action);
};

const appReducer = combineReducers({ votingSlice: votingReducer, universityListSlice: uniListReducer, voteHistorySlice: votedHistoryReducer });

export default configureStore({
  reducer: rootReducer,
});
