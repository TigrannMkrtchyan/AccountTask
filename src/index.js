import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AccountsContext } from "./Components/Context/Context"

ReactDOM.render(
  <React.StrictMode>
    <AccountsContext>
    <App />
    </AccountsContext>
  </React.StrictMode>,
  document.getElementById("root")
);
