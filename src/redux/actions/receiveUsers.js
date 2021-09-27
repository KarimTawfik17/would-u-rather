export const RECEIVE_USERS = "RECEIVE_USERS";

export default function receiveUsersAction(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}
