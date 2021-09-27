import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import handleReceiveDataAction from "./redux/actions/handleReceiveData";
import LoadingBar from "react-redux-loading";
import LoginForm from "./components/LoginForm";
import LeaderBoard from "./components/LeaderBoard";
import NewQuestion from "./components/NewQuestion";

function App() {
  const dispatch = useDispatch();
  const ready = useSelector((state) => state.ready);
  useEffect(() => {
    dispatch(handleReceiveDataAction());
  }, [dispatch]);

  return (
    <div className="App">
      <LoadingBar />
      {ready && <LoginForm />}
      {ready && <NewQuestion />}
    </div>
  );
}

export default App;
