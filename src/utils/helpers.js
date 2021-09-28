export function fromatQuestions(questionsObj, usersObj, currentUser) {
  const answered = [];
  const unAnswered = [];

  for (let id in questionsObj) {
    const formattedQuestion = fromatQuestion(
      id,
      questionsObj,
      usersObj,
      currentUser
    );
    if (formattedQuestion.answer) {
      answered.push(formattedQuestion);
    } else {
      unAnswered.push(formattedQuestion);
    }
  }
  return [
    answered.sort((a, b) => b.timestamp - a.timestamp),
    unAnswered.sort((a, b) => b.timestamp - a.timestamp),
  ];
}

export function fromatQuestion(id, questionsObj, usersObj, currentUser) {
  // console.log(
  //   "format questions args are, ",
  //   id,
  //   questionsObj,
  //   usersObj,
  //   currentUser
  // );
  const formattedQuestion = {};
  formattedQuestion.id = id;
  formattedQuestion.authorName = usersObj[questionsObj[id].author].name;
  formattedQuestion.avatar = usersObj[questionsObj[id].author].avatarURL;
  formattedQuestion.optionOne = questionsObj[id].optionOne;
  formattedQuestion.optionTwo = questionsObj[id].optionTwo;
  formattedQuestion.timestamp = questionsObj[id].timestamp;
  if (questionsObj[id].optionOne.votes.includes(currentUser)) {
    formattedQuestion.answer = "optionOne";
  } else if (questionsObj[id].optionTwo.votes.includes(currentUser)) {
    formattedQuestion.answer = "optionTwo";
  }

  return formattedQuestion;
}

export function formatUsers(usersObj) {
  const usersArr = [];

  for (let key in usersObj) {
    const answers = Object.keys(usersObj[key].answers).length;
    const questions = usersObj[key].questions.length;
    usersArr.push({
      id: usersObj[key].id,
      name: usersObj[key].name,
      avatar: usersObj[key].avatarURL,
      answers,
      questions,
      score: answers + questions,
    });
  }
  return usersArr.sort((a, b) => b.score - a.score);
}
