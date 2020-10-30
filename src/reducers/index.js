import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import testReducer from "./testReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  testReducer: testReducer,
});

export default allReducers;
