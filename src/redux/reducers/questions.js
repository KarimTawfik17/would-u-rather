import { ADD_QUESTION } from "../actions/addQuestion";
import { ANSWER_QUESTION } from "../actions/answerQuestion";
import { RECEIVE_QUESTIONS } from "../actions/receiveQuestions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([action.uid]),
          },
        },
      };

    default:
      return state;
  }
}
