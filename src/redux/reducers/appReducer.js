import { combineReducers } from "redux";
import currentUser from "./currentUser";
import questions from "./questions";
import users from "./users";
import { loadingBarReducer } from "react-redux-loading";
import ready from "./ready";

const appReducer = combineReducers({
  currentUser,
  users,
  questions,
  loadingBar: loadingBarReducer,
  ready,
});

export default appReducer;
