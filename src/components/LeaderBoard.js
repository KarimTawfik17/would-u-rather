import { useSelector } from "react-redux";
import User from "./User";
import { formatUsers } from "../utils/helpers";

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
