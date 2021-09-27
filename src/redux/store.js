import { createStore } from "redux";
import midllwares from "./middleware";
import appReducer from "./reducers/appReducer";

const store = createStore(appReducer, midllwares);

export default store;
