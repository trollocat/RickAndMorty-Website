import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { GlobalStyle } from "./css/Styled";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
