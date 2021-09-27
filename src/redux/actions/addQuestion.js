export const ADD_QUESTION = "ADD_QUESTION";

export default function addQuestionAction(question) {
  return {
    type: ADD_QUESTION,
    question,
    uid: question.author,
    qid: question.id,
  };
}
