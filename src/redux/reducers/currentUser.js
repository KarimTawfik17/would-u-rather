import { LOGIN } from "../actions/loginAction";
import { LOGOUT } from "../actions/logoutAction";

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
