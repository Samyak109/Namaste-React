import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1", // Tag
    {
      // we pass attributes here
      id: "title",
    },
    "Namaste From React" // Children/Inner Body
  );
  const heading2 = React.createElement(
    "h2", 
    {
      id: "title",
      helloworld: "This can be anything and it's will go in props. Props can be everything"
    },
    "Namaste From React h2"
  );
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading2] // Children/Inner Body
  );
  /* In react we need to assign root to something so it renders in that root*/
  const root = ReactDOM.createRoot(document.getElementById("root")); 

  // passing react element to root, render takes react element and modifies DOM
  root.render(container);