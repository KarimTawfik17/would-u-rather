import { combineReducers } from "redux";
import currentUser from "./currentUser";

const appReducer = combineReducers({
  currentUser,
});

export default appReducer;
