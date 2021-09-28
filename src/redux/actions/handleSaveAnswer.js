import { _saveQuestionAnswer } from "../../utils/_DATA";
import answerQuestionAction from "./answerQuestion";
import { showLoading, hideLoading } from "react-redux-loading";

export default function handleSaveAnswerAction(qid, answer) {
  return (dispatch, getState) => {
    dispatch(showLoading());
    _saveQuestionAnswer({
      qid,
      answer,
      authedUser: getState().currentUser,
    }).then(() => {
      dispatch(answerQuestionAction(qid, getState().currentUser, answer));
      dispatch(hideLoading());
    });
  };
}
