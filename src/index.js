import React from "react";
import ReactDOM from "react-dom";
import App from "components/App/App";
import GlobalStyles from "styles/globals";
import { Provider } from "react-redux";
import configureStore from "store";

const renderApp = () => {
  const initialState = {};
  const store = configureStore(initialState);

  store.dispatch({ type: "@hnClone/@@INIT" });

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

renderApp();
