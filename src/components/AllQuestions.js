import { useSelector } from "react-redux";
import { fromatQuestions } from "../utils/helpers";
import AnsweredQuestions from "./AnsweredQuestions";
import UnAnsweredQuestions from "./UnAnsweredQuestions";

function AllQuestions() {
  const [answered, unAnswered] = useSelector((state) =>
    fromatQuestions(state.questions, state.users, state.currentUser)
  );
  return (
    <div>
      <AnsweredQuestions questions={answered} />
      <UnAnsweredQuestions questions={unAnswered} />
    </div>
  );
}

export default AllQuestions;
