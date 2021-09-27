import { RECEIVE_USERS } from "../actions/receiveUsers";
import { ADD_QUESTION } from "../actions/addQuestion";
import { ANSWER_QUESTION } from "../actions/answerQuestion";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case ADD_QUESTION:
      return {
        ...state,
        [action.uid]: {
          ...state[action.uid],
          questions: state[action.uid].questions.concat([action.qid]),
        },
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.uid]: {
          ...state[action.uid],
          answers: {
            ...state[action.uid].answers,
            [action.qid]: action.answer,
          },
        },
      };
    default:
      return state;
  }
}
