import { _saveQuestionAnswer } from "../../utils/_DATA";
import answerQuestionAction from "./answerQuestion";

export default function handleSaveAnswerAction(qid, answer) {
  return (dispatch, getState) => {
    _saveQuestionAnswer({
      qid,
      answer,
      authedUser: getState().currentUser,
    }).then(() =>
      dispatch(answerQuestionAction(qid, getState().currentUser, answer))
    );
  };
}
