import { _getUsers, _getQuestions } from "../../utils/_DATA";
import receiveQuestionsAction from "./receiveQuestions";
import receiveUsersAction from "./receiveUsers";
export default function handleReceiveDataAction() {
  return (dispatch) => {
    Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => {
      dispatch(receiveUsersAction(users));
      dispatch(receiveQuestionsAction(questions));
    });
  };
}
