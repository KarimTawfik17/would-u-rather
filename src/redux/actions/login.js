export const LOGIN = "LOGIN";

export default function loginAction(userID) {
  return {
    type: LOGIN,
    userID,
  };
}
