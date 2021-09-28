import Card from "./UI/Card";
import styles from "./Question.module.css";
import Button from "./UI/Button";
function Question({ question }) {
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
        <Button className={styles.btn} type="button">
          View Question
        </Button>
      </div>
    </Card>
  );
}

export default Question;
