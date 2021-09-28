import { useDispatch, useSelector } from "react-redux";
import { fromatQuestion } from "../utils/helpers";
import Card from "./UI/Card";
import styles from "./QuestionPage.module.css";
import Button from "./UI/Button";
import { useParams } from "react-router";
import handleSaveAnswerAction from "../redux/actions/handleSaveAnswer";

function QuestionPage() {
  const { qid: id } = useParams();

  const question = useSelector((state) => {
    const formattedQuestion = fromatQuestion(
      id,
      state.questions,
      state.users,
      state.currentUser
    );
    return formattedQuestion;
  });
  const dispatch = useDispatch();

  return (
    <div className="container">
      <Card>
        <div className={styles.avatar}>
          <img src={question.avatar} alt={`avatar of ${question.name}`} />
        </div>
        <div className={styles.questionInfo}>
          <p className={styles.author}>
            <span>{question.authorName}</span> created this question.
          </p>

          <p className={styles.question}>Would you rather ... ?</p>
          {!question.answer && (
            <div className={styles.answers}>
              <Button
                onClick={() =>
                  dispatch(handleSaveAnswerAction(question.id, "optionOne"))
                }
                secondary={true}
              >
                {question.optionOne.text}
              </Button>
              <Button
                onClick={() =>
                  dispatch(handleSaveAnswerAction(question.id, "optionTwo"))
                }
                secondary={true}
              >
                {question.optionTwo.text}
              </Button>
            </div>
          )}
          {question.answer && (
            <div className={styles.answers}>
              <div
                className={
                  question.answer === "optionOne" ? styles.myAnswer : ""
                }
              >
                <p className={styles.text}>{question.optionOne.text}</p>
                <p className={styles.vote}>{question.optionOne.votes.length}</p>
              </div>
              <div
                className={
                  question.answer === "optionTwo" ? styles.myAnswer : ""
                }
              >
                <p className={styles.text}>{question.optionTwo.text}</p>
                <p className={styles.vote}>{question.optionTwo.votes.length}</p>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

export default QuestionPage;
