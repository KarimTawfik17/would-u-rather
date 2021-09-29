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
  var unformattedQuesrtion = questionsObj[id];
  if (!unformattedQuesrtion) {
    //wrong Id
    return null;
  }

  const formattedQuestion = {};
  formattedQuestion.id = id;
  formattedQuestion.authorName = usersObj[unformattedQuesrtion.author].name;
  formattedQuestion.avatar = usersObj[unformattedQuesrtion.author].avatarURL;
  formattedQuestion.optionOne = unformattedQuesrtion.optionOne;
  formattedQuestion.optionTwo = unformattedQuesrtion.optionTwo;
  formattedQuestion.timestamp = unformattedQuesrtion.timestamp;
  if (unformattedQuesrtion.optionOne.votes.includes(currentUser)) {
    formattedQuestion.answer = "optionOne";
  } else if (unformattedQuesrtion.optionTwo.votes.includes(currentUser)) {
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

export function calcPercentage(optionOne, optionTwo) {
  return [
    (
      (optionOne.votes.length /
        (optionOne.votes.length + optionTwo.votes.length)) *
      100
    ).toFixed(0),
    (
      (optionTwo.votes.length /
        (optionOne.votes.length + optionTwo.votes.length)) *
      100
    ).toFixed(0),
  ];
}
