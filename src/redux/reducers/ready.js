import { GET_READY } from "../actions/getReady";

export default function ready(state = false, action) {
  switch (action.type) {
    case GET_READY:
      return true;

    default:
      return state;
  }
}
