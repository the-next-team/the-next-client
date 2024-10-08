import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// RealGrid Style
import "./components/table/style/realgrid-custom-style.css";
import "./styles/realchart/realchart-style.css";
import "react-datepicker/dist/react-datepicker.css";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
