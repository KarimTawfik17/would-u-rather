import styles from "./Button.module.css";

function Button(props) {
  const classes =
    props.className +
    " " +
    styles.btn +
    " " +
    (props.secondary === true
      ? styles["secondary-btn"]
      : styles["primary-btn"]);

  return (
    <button disabled={props.disabled} className={classes} type={props.type}>
      {props.children}
    </button>
  );
}

export default Button;
