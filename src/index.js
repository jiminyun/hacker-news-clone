import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import GlobalStyles from "styles/globals";
import { Provider } from "react-redux";
import configureStore from "store";
import hackerNewsApi from "services/hackerNewsApi";

hackerNewsApi.getTopStoryIds().then(ids => console.log(ids));
const renderApp = () => {
  const initialState = {};
  const store = configureStore(initialState);

  store.dispatch({ type: "@hnClone/INIT" });

  ReactDOM.render(
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

renderApp();
