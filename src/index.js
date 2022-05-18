import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const sayHellowTo = (name) => {
  return <h1>hellow {name}!</h1>;
};

root.render(
  <React.StrictMode>
    <span>{sayHellowTo("Giorgi")}</span>
  </React.StrictMode>
);
