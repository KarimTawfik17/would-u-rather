import { applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
const midllwares = applyMiddleware(thunk, logger);

export default midllwares;
