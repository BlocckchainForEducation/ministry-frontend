import { configureStore } from "@reduxjs/toolkit";
import votingReducer from "./views/Voting/redux";
import uniListReducer from "./views/UniversityList/redux";

export default configureStore({
  reducer: { votingViewSlice: votingReducer, universityListSlice: uniListReducer },
});
