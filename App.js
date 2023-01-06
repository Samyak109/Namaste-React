import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1", // Tag
  {
    // we pass attributes here
    id: "title",
    key: "h1", // Passing key
  },
  "Namaste From React" // Children/Inner Body
);
const heading2 = React.createElement(
  "h2",
  {
    id: "title",
    key: "h2",
  },
  "Namaste From React h2"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2] // These are siblings so for efficient rendering we use keys so that react don't have to re render children with same key
);
/* In react we need to assign root to something so it renders in that root*/
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing react element to root, render takes react element and modifies DOM
root.render(container);
