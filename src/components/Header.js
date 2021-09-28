import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Button from "./UI/Button";
import LoadingBar from "react-redux-loading";

function Header(props) {
  return (
    <>
      <LoadingBar style={{ backgroundColor: "#f85c3c", height: "6px" }} />

      <header className={styles.header}>
        <h1>Would You Rather ?</h1>
        <nav>
          <ul>
            <li>
              <NavLink activeClassName={styles.active} to="/dashboard">
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
          <p>Hello..</p>
          <Button>Logout</Button>
        </div>
      </header>
    </>
  );
}

export default Header;
