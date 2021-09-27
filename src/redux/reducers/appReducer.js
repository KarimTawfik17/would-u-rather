import { combineReducers } from "redux";
import currentUser from "./currentUser";
import questions from "./questions";
import users from "./users";

const appReducer = combineReducers({
  currentUser,
  users,
  questions,
});

export default appReducer;
