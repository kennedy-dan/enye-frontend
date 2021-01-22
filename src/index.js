import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";

window.store = store;

ReactDOM.render(
    <BrowserRouter>
      {" "}
      <App />{" "}
    </BrowserRouter>,
  document.getElementById("root")
);
