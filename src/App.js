import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import handleReceiveDataAction from "./redux/actions/handleReceiveData";
import LoadingBar from "react-redux-loading";
import LoginForm from "./components/LoginForm";
import LeaderBoard from "./components/LeaderBoard";
import NewQuestion from "./components/NewQuestion";
import AllQuestions from "./components/AllQuestions";

function App() {
  const dispatch = useDispatch();
  const ready = useSelector((state) => state.ready);
  useEffect(() => {
    dispatch(handleReceiveDataAction());
  }, [dispatch]);

  return (
    <div className="App">
      <LoadingBar style={{ backgroundColor: "#f85c3c" }} />
      {ready && <LoginForm />}
      {ready && <LeaderBoard />}
    </div>
  );
}

export default App;
