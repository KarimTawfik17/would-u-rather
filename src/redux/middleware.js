import { applyMiddleware } from "redux";
//import logger from "redux-logger"; //for development
import thunk from "redux-thunk";
const midllwares = applyMiddleware(thunk);

export default midllwares;
