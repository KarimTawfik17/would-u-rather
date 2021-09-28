function AnsweredQuestions({ questions }) {
  return (
    <div>
      <h2>answered questions</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>{JSON.stringify(question)}</li>
        ))}
      </ul>
    </div>
  );
}

export default AnsweredQuestions;
