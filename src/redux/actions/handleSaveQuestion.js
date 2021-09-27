import addQuestionAction from "./addQuestion";
import { _saveQuestion } from "../../utils/_DATA";

export default function handleSaveQuestionAction(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    _saveQuestion({
      optionOneText,
      optionTwoText,
      author: getState().currentUser,
    }).then((question) => {
      dispatch(addQuestionAction(question));
    });
  };
}
