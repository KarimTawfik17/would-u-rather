import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import handleReceiveDataAction from "./redux/actions/handleReceiveData";

import LoginForm from "./components/LoginForm";
import LeaderBoard from "./components/LeaderBoard";
import NewQuestion from "./components/NewQuestion";
import AllQuestions from "./components/AllQuestions";
import QuestionPage from "./components/QuestionPage";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();
  const ready = useSelector((state) => state.ready);
  useEffect(() => {
    dispatch(handleReceiveDataAction());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      {ready && <LoginForm />}
      {ready && <LeaderBoard />}
      {ready && <QuestionPage id="8xf0y6ziyjabvozdd253nd" />}
      <AllQuestions />
    </div>
  );
}

export default App;
