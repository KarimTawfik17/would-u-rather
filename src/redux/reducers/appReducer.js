import { combineReducers } from "redux";
import currentUser from "./currentUser";
import questions from "./questions";
import users from "./users";
import { loadingBarReducer } from "react-redux-loading";

const appReducer = combineReducers({
  currentUser,
  users,
  questions,
  loadingBar: loadingBarReducer,
});

export default appReducer;
