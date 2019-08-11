import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// import { fetchMovies } from "./actions";

import { createLogger } from "redux-logger";

import { fetchMoviesReducer } from "./reducers/MoviesReducer";

const rootReducer = combineReducers({ fetchMoviesReducer });

const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

console.log(store.getState());

// store.dispatch(fetchMovies());
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
