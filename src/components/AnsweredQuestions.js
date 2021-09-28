import Question from "./Question";
function AnsweredQuestions({ questions }) {
  return (
    <div className="container">
      <h1>Answered Questions</h1>
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

export default AnsweredQuestions;
