import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import handleReceiveDataAction from "./redux/actions/handleReceiveData";

import LoginForm from "./components/LoginForm";
import LeaderBoard from "./components/LeaderBoard";
import NewQuestion from "./components/NewQuestion";
import AllQuestions from "./components/AllQuestions";
import QuestionPage from "./components/QuestionPage";
import Header from "./components/Header";
import { Route, Switch } from "react-router";
import Unfound from "./components/Unfound";

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
        <Route path="/questions/:qid" exact>
          <QuestionPage />
        </Route>

        <Route path="/add" exact>
          <NewQuestion />
        </Route>
        <Route path="/leaderboard" exact>
          <LeaderBoard />
        </Route>
        <Route path="/" exact>
          <AllQuestions />
        </Route>
        <Route path="/">
          <Unfound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
