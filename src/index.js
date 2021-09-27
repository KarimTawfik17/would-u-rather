// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

import loginAction from "./redux/actions/login";
import logoutAction from "./redux/actions/logout";
import handleReceiveDataAction from "./redux/actions/handleReceiveData";
import store from "./redux/store";

// store.dispatch(loginAction("kimo"));
// store.dispatch(loginAction("karamella"));
// store.dispatch(logoutAction());
// store.dispatch(loginAction("sayd"));

store.dispatch(handleReceiveDataAction());
