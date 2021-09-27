import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loginAction from "../redux/actions/login";
import styles from "./LoginForm.module.css";

function LoginForm(props) {
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
    // console.log(selectedUser);
    dispatch(loginAction(selectedUser));
  }

  function changeHandler(e) {
    setSelectedUser(e.target.value);
  }

  return (
    <form className={styles.loginForm} onSubmit={submitHandler}>
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
      <button
        disabled={selectedUser === ""}
        className={styles.btn}
        type="submit"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
