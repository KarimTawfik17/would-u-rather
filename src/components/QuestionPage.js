import { useSelector } from "react-redux";
import { fromatQuestion } from "../utils/helpers";

// import formatQ

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
    <div>
      <div>{question.authorName}</div>
      <div>
        {question.optionOne.text} {question.optionOne.votes.length}{" "}
      </div>
      <div>
        {question.optionTwo.text} {question.optionTwo.votes.length}{" "}
      </div>
      <div>u answerd :{question.answer}</div>
    </div>
  );
}

export default QuestionPage;
