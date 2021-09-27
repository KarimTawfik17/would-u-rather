import { useEffect } from "react";
import { useDispatch } from "react-redux";
import handleReceiveDataAction from "./redux/actions/handleReceiveData";
import LoadingBar from "react-redux-loading";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleReceiveDataAction());
  }, [dispatch]);

  return (
    <div className="App">
      <LoadingBar />
      Hello world !
    </div>
  );
}

export default App;
