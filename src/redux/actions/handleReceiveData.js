import { hideLoading, showLoading } from "react-redux-loading";
import { _getUsers, _getQuestions } from "../../utils/_DATA";
import getReadyAction from "./getReady";
import receiveQuestionsAction from "./receiveQuestions";
import receiveUsersAction from "./receiveUsers";

export default function handleReceiveDataAction() {
  return (dispatch) => {
    dispatch(showLoading());
    Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => {
      dispatch(receiveUsersAction(users));
      dispatch(receiveQuestionsAction(questions));
      dispatch(getReadyAction());
      dispatch(hideLoading());
    });
  };
}
