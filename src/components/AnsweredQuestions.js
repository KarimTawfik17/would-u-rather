import QuestionPage from "./QuestionPage";

function AnsweredQuestions({ questions }) {
  return (
    <div className="container">
      <h1>Answered Questions</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            {JSON.stringify(question)}
            <QuestionPage id={question.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnsweredQuestions;
