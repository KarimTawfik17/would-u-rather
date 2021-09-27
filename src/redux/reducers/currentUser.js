import { LOGIN } from "../actions/login";
import { LOGOUT } from "../actions/logout";

export default function currentUser(state = null, action) {
  switch (action.type) {
    case LOGIN:
      return action.userID;
    case LOGOUT:
      return null;
    default:
      return state;
  }
}
