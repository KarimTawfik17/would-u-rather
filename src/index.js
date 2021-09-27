// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

import loginAction from "./redux/actions/loginAction";
import logoutAction from "./redux/actions/logoutAction";
import store from "./redux/store";

store.dispatch(loginAction("kimo"));
store.dispatch(loginAction("karamella"));
store.dispatch(logoutAction());
store.dispatch(loginAction("sayd"));
