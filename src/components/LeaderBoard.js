import { useSelector } from "react-redux";
import User from "./User";

function formatUsers(usersObj) {
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

function LeaderBoard(props) {
  const users = useSelector((state) => formatUsers(state.users));

  return (
    <div>
      LeaderBoard
      {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
}

export default LeaderBoard;
