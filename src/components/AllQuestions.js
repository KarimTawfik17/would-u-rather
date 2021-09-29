import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { NavLink } from "react-router-dom";
import { fromatQuestions } from "../utils/helpers";
import AnsweredQuestions from "./AnsweredQuestions";
import UnAnsweredQuestions from "./UnAnsweredQuestions";
import styles from "./AllQuestions.module.css";

function AllQuestions() {
  const [answered, unAnswered] = useSelector((state) =>
    fromatQuestions(state.questions, state.users, state.currentUser)
  );
  return (
    <>
      <div className={styles.questionsNav + " container"}>
        <h1 className={styles.navHeader}>
          <NavLink activeClassName={styles.active} to="/home/answered">
            Answered Questions
          </NavLink>
        </h1>

        <h1 className={styles.navHeader}>
          <NavLink activeClassName={styles.active} to="/home/unanswered">
            Un-Answered Questions
          </NavLink>
        </h1>
      </div>
      <div>
        <Route path="/home" exact>
          <Redirect to="/home/unanswered" />
        </Route>
        <Route path="/home/unanswered">
          <UnAnsweredQuestions questions={unAnswered} />
        </Route>
        <Route path="/home/answered">
          <AnsweredQuestions questions={answered} />
        </Route>
      </div>
    </>
  );
}

export default AllQuestions;
