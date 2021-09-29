import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import handleSaveQuestionAction from "../redux/actions/handleSaveQuestion";

import styles from "./NewQuestion.module.css";
import Button from "./UI/Button";

function NewQuestion() {
  const dispatch = useDispatch();

  const history = useHistory();
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    dispatch(
      handleSaveQuestionAction(optionOneText, optionTwoText, () => {
        setOptionOneText("");
        setOptionTwoText("");
        history.push("/");
      })
    );
  }
  return (
    <div className="container">
      <h1>Create new question</h1>
      <form onSubmit={submitHandler}>
        <label className={styles.label}>
          <div>Would you rather...</div>
          <input
            className={styles.input}
            value={optionOneText}
            onChange={(e) => setOptionOneText(e.target.value)}
          />
        </label>
        <label className={styles.label}>
          <div className={styles.or}>Or</div>
          <input
            className={styles.input}
            value={optionTwoText}
            onChange={(e) => setOptionTwoText(e.target.value)}
          />
        </label>
        <Button
          type="submit"
          className={styles.btn}
          disabled={optionOneText.trim() === "" || optionTwoText.trim() === ""}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default NewQuestion;
