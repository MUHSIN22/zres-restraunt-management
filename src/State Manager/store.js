import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducerHub } from "./Reducer/ReducerHub";

export const store = createStore(
  reducerHub,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
