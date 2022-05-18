import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const sum = (a, b) => {
  return <h2>{a + b}</h2>;
};

root.render(
  <React.StrictMode>
    <span>{5} + {7} = {sum(5, 7)}</span>
  </React.StrictMode>
);
