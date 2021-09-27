export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export default function receiveQuestionsAction(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
