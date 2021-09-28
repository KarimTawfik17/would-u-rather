import { useSelector } from "react-redux";
import { fromatQuestion } from "../utils/helpers";
import Card from "./UI/Card";
import styles from "./QuestionPage.module.css";

function QuestionPage({ id }) {
  const question = useSelector((state) => {
    const formattedQuestion = fromatQuestion(
      id,
      state.questions,
      state.users,
      state.currentUser
    );
    // console.log("formatted q :", formattedQuestion);
    return formattedQuestion;
  });

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
          <div className={styles.answers}>
            <button>{question.optionOne.text}</button>
            <button>{question.optionTwo.text}</button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default QuestionPage;
