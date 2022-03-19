import { createStore } from "redux";
import rootReducer from "./reducers/index.js";

const initialState = {};

let store = createStore(
  rootReducer(),
  initialState
  // initialState + window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //   window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
