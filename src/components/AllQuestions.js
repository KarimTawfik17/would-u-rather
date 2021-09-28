import { useSelector } from "react-redux";
import AnsweredQuestions from "./AnsweredQuestions";
import UnAnsweredQuestions from "./UnAnsweredQuestions";

function fromatQuestions(questionsObj, usersObj, currentUser) {
  const answered = [];
  const unAnswered = [];

  for (let key in questionsObj) {
    const formattedQuestion = {};
    formattedQuestion.id = key;
    formattedQuestion.authorName = usersObj[questionsObj[key].author].name;
    formattedQuestion.avatar = usersObj[questionsObj[key].author].avatarURL;
    formattedQuestion.optionOne = questionsObj[key].optionOne;
    formattedQuestion.optionTwo = questionsObj[key].optionTwo;
    formattedQuestion.timeStamp = questionsObj[key].timeStamp;
    if (questionsObj[key].optionOne.votes.includes(currentUser)) {
      formattedQuestion.answer = "optionOne";
      answered.push(formattedQuestion);
    } else if (questionsObj[key].optionTwo.votes.includes(currentUser)) {
      formattedQuestion.answer = "optionTwo";
      answered.push(formattedQuestion);
    } else {
      unAnswered.push(formattedQuestion);
    }
  }
  return [
    answered.sort((a, b) => b.timeStamp - a.timeStamp),
    unAnswered.sort((a, b) => b.timeStamp - a.timeStamp),
  ];
}

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
