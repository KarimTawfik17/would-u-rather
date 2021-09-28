import Card from "./UI/Card";
import styles from "./User.module.css";

function User({ name, avatar, answers, questions, score }) {
  return (
    <Card className={styles.user}>
      <div className={styles.avatar}>
        <img src={avatar} alt={`avatar of ${name}`} />
      </div>
      <div className={styles.info}>
        <h2>{name}</h2>
        <div>
          <p>
            Answered questions : <span> {answers} </span>{" "}
          </p>
        </div>
        <div>
          <p>
            Created questions : <span> {questions} </span>{" "}
          </p>
        </div>
      </div>

      <div className={styles.score}>
        <h3>Score</h3>
        <span> {score} </span>
      </div>
    </Card>
  );
}

export default User;
