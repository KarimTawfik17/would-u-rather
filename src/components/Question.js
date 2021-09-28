import Card from "./UI/Card";
import styles from "./Question.module.css";
import Button from "./UI/Button";
import { useHistory } from "react-router";
function Question({ question }) {
  const history = useHistory();
  function viewQuestion(e) {
    history.push(`/questions/${question.id}`);
  }
  return (
    <Card>
      <div className={styles.avatar}>
        <img src={question.avatar} alt={`avatar of ${question.name}`} />
      </div>
      <div className={styles.questionInfo}>
        <p className={styles.author}>
          <span>{question.authorName}</span> created this question.
        </p>

        <p className={styles.question}>Would you rather ... ?</p>
        <Button onClick={viewQuestion} className={styles.btn} type="button">
          View Question
        </Button>
      </div>
    </Card>
  );
}

export default Question;
