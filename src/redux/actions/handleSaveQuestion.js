import addQuestionAction from "./addQuestion";
import { _saveQuestion } from "../../utils/_DATA";
import { hideLoading, showLoading } from "react-redux-loading";

export default function handleSaveQuestionAction(
  optionOneText,
  optionTwoText,
  cb
) {
  return (dispatch, getState) => {
    dispatch(showLoading());
    _saveQuestion({
      optionOneText,
      optionTwoText,
      author: getState().currentUser,
    })
      .then((question) => {
        dispatch(addQuestionAction(question));
        dispatch(hideLoading());
      })
      .then(cb);
  };
}
