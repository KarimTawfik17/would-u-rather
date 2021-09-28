function UnAnsweredQuestions({ questions }) {
  return (
    <div>
      <h2>Un answered questions</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>{JSON.stringify(question)}</li>
        ))}
      </ul>
    </div>
  );
}

export default UnAnsweredQuestions;
