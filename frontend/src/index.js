import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Store from "./Config/store";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./tailwind.css";

import "./i18n";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const renderElement = (
  <>
    <Router>
      <Provider store={Store}>
        <App />
      </Provider>
    </Router>
    <ToastContainer
      position="top-right"
      theme={"colored"}
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
    />
  </>
);

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(renderElement, rootElement);
} else {
  root.render(renderElement);
}
