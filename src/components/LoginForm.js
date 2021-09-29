import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import loginAction from "../redux/actions/login";
import styles from "./LoginForm.module.css";
import Button from "./UI/Button";

function LoginForm() {
  const history = useHistory();
  const [ids, users] = useSelector((state) => [
    Object.keys(state.users),
    state.users,
  ]);
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState("");
  const avatarURL =
    selectedUser === ""
      ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
      : users[selectedUser].avatarURL;

  function submitHandler(e) {
    e.preventDefault();

    dispatch(loginAction(selectedUser));
    history.push("/");
  }

  function changeHandler(e) {
    setSelectedUser(e.target.value);
  }

  return (
    <form className=" container" onSubmit={submitHandler}>
      <h1> Login </h1>
      <div className={styles.avatar}>
        <img src={avatarURL} alt="selected user avatar" />
      </div>
      <select
        className={styles.select}
        value={selectedUser}
        onChange={changeHandler}
        placeholder="Select User"
      >
        <option disabled value="">
          Select User
        </option>
        {ids.map((id) => (
          <option key={id} value={id}>
            {users[id].name}
          </option>
        ))}
      </select>
      <Button
        type="submit"
        className={styles.btn}
        disabled={selectedUser === ""}
      >
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
