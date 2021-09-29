import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import handleReceiveDataAction from "./redux/actions/handleReceiveData";

import LoginForm from "./components/LoginForm";
import LeaderBoard from "./components/LeaderBoard";
import NewQuestion from "./components/NewQuestion";
import AllQuestions from "./components/AllQuestions";
import QuestionPage from "./components/QuestionPage";
import Header from "./components/Header";
import { Redirect, Route, Switch } from "react-router";

function App() {
  const dispatch = useDispatch();
  const ready = useSelector((state) => state.ready);
  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    dispatch(handleReceiveDataAction());
  }, [dispatch]);

  if (!ready) {
    return <Header />;
  }

  if (!currentUser) {
    return (
      <>
        <Header />
        <LoginForm />
      </>
    );
  }
  return (
    <>
      <Header />
      <Switch>
        <Route path="/questions/:qid">
          <QuestionPage />
        </Route>
        <Route path="/home">
          <AllQuestions />
        </Route>

        <Route path="/add">
          <NewQuestion />
        </Route>
        <Route path="/leaderboard">
          <LeaderBoard />
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
