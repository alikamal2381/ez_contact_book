import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import testReducer from "./testReducer";
import contactReducer from "./contactReducer";

const rootReducers = combineReducers({
  contact: contactReducer,
  counter: counterReducer,
  isLogged: loggedReducer,
  testReducer: testReducer,
});

export default rootReducers;
