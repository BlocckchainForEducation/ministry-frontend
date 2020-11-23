import { configureStore } from "@reduxjs/toolkit";
import votingReducer from "./views/Voting/redux";

export default configureStore({
  reducer: { votingViewSlice: votingReducer },
});
