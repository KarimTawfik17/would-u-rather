import Question from "./Question";

function UnAnsweredQuestions({ questions }) {
  return (
    <div className="container">
      <h1>Un-Answered Questions</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <Question question={question} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UnAnsweredQuestions;
