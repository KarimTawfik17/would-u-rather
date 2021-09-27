import styles from "./User.module.css";

function User({ name, avatar, answers, questions, score }) {
  return (
    <div className={styles.user}>
      <div className={styles.avatar}>
        <img src={avatar} alt={`avatar of ${name}`} style={{ width: "75px" }} />
      </div>
      <div className={styles.info}>
        <h2>name</h2>
        <div>
          <p>Answered questions </p>
          <p>{answers}</p>
        </div>
        <div>
          <p>Created questions </p>
          <p>{questions}</p>
        </div>
      </div>

      <div className={styles.score}>
        <h3>Score</h3>
        <p> {score} </p>
      </div>
    </div>
  );
}

export default User;
