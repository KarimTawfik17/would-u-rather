export const ANSWER_QUESTION = "ANSWER_QUESTION";

export default function answerQuestionAction(qid, uid, answer) {
  return {
    type: ANSWER_QUESTION,
    qid,
    uid,
    answer,
  };
}
