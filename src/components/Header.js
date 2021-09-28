import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Button from "./UI/Button";
import LoadingBar from "react-redux-loading";
import { useDispatch, useSelector } from "react-redux";
import logoutAction from "../redux/actions/logout";

function Header() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users[state.currentUser]);

  return (
    <>
      <LoadingBar style={{ backgroundColor: "#f85c3c", height: "6px" }} />

      <header className={styles.header}>
        <h1>Would You Rather ?</h1>
        <nav className={!currentUser ? styles.disabled : ""}>
          <ul>
            <li>
              <NavLink
                disabled={currentUser === undefined}
                activeClassName={styles.active}
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={styles.active} to="/add">
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={styles.active} to="/leaderboard">
                Leader Board
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.loginInfo}>
          {currentUser ? (
            <p>
              <span> {currentUser.name} </span>
              <img src={currentUser.avatarURL} alt="avatar" />
            </p>
          ) : (
            <p>Please Login</p>
          )}
          <Button onClick={(e) => dispatch(logoutAction())}>Logout</Button>
        </div>
      </header>
    </>
  );
}

export default Header;
