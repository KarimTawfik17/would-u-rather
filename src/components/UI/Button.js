import styles from "./Button.module.css";

function Button(props) {
  const classes =
    props.className +
    " " +
    (props.secondary ? styles["secondary-btn"] : styles["primary-btn"]);
  console.log(props, classes);
  return (
    <button disabled={props.disabled} className={classes} type={props.type}>
      {props.children}
    </button>
  );
}

export default Button;
