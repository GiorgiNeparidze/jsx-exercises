import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const hellow = "Hello, World!";
root.render(
  <React.StrictMode>
    <h1>{hellow}</h1>
  </React.StrictMode>
);
