import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const store = createStore(rootReducer, composeWithDevTools());

export default store;

//import allReducer from "./reducers";
//import { Provider } from "react-redux";

/*
const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

*/
