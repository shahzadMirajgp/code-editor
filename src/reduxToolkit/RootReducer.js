import { combineReducers } from "@reduxjs/toolkit";
import { contentSlice } from "./reducers/contentReducer/contentReducer";
const RootReducer = combineReducers({
  [contentSlice.name]: contentSlice.reducer,
});

const combinedReducer = (state, action) => {
  if (action.type === "RESET_CACHE") {
    state = undefined;
  }
  return RootReducer(state, action);
};

export default combinedReducer;
