import { useState } from "react";
import { useDispatch } from "react-redux";
import handleSaveQuestionAction from "../redux/actions/handleSaveQuestion";

import styles from "./NewQuestion.module.css";

function NewQuestion() {
  const dispatch = useDispatch();
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    dispatch(handleSaveQuestionAction(optionOneText, optionTwoText));
    setOptionOneText("");
    setOptionTwoText("");
  }
  return (
    <div>
      <h1>Create new question</h1>
      <form onSubmit={submitHandler}>
        <label>
          Would you rather...
          <input
            value={optionOneText}
            onChange={(e) => setOptionOneText(e.target.value)}
          />
        </label>
        <label>
          Or
          <input
            value={optionTwoText}
            onChange={(e) => setOptionTwoText(e.target.value)}
          />
        </label>
        <button
          type="submit"
          disabled={optionOneText.trim() === "" || optionTwoText.trim() === ""}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewQuestion;
