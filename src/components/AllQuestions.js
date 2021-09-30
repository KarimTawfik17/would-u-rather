import { useSelector } from "react-redux";
import { fromatQuestions } from "../utils/helpers";
import AnsweredQuestions from "./AnsweredQuestions";
import UnAnsweredQuestions from "./UnAnsweredQuestions";
import styles from "./AllQuestions.module.css";
import Button from "./UI/Button";
import { useState } from "react";
function AllQuestions() {
  const [shown, setShown] = useState("unanswered");
  const [answered, unAnswered] = useSelector((state) =>
    fromatQuestions(state.questions, state.users, state.currentUser)
  );
  return (
    <>
      <div className={styles.questionsNav + " container"}>
        <h1 className={styles.navHeader}>
          <Button
            secondary={shown !== "answered"}
            onClick={(e) => setShown("answered")}
          >
            Answered Questions
          </Button>
        </h1>

        <h1 className={styles.navHeader}>
          <Button
            secondary={shown !== "unanswered"}
            onClick={(e) => setShown("unanswered")}
          >
            Un-Answered Questions
          </Button>
        </h1>
      </div>
      <div>
        {shown === "unanswered" && (
          <UnAnsweredQuestions questions={unAnswered} />
        )}
        {shown === "answered" && <AnsweredQuestions questions={answered} />}
      </div>
    </>
  );
}

export default AllQuestions;
