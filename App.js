import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
  return <h1>Namaste React from functional component</h1>;
};

const heading = (
  <h1 id="title" key={"h1"}>
    Namaste From React
  </h1>
);

const heading2 = (
  <h2 id="title2" key={"h2"}>
    Namaste From React h2
  </h2>
);

const container = (
  <div id="container">
    {heading}
    {heading2}
  </div>
);
/* In react we need to assign root to something so it renders in that root*/
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing react element to root, render takes react element and modifies DOM
root.render(container);
