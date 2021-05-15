import { createStore, applyMiddleware } from "redux";
import rootReducers from "./rootReducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(rootReducers);

export default store;
