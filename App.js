import ReactDOM from "react-dom/client";
/* With the new JSX transform from react 17, you can use JSX without importing React. 
https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#whats-a-jsx-transform*/
const heading = (
  <h1 id="title" key={"h1"}>
    Namaste From React
  </h1>
);

const Title = () => ( // Why we insert Parenthesis here ? Short Answer => we need () to return an object from arrow function. Long -> Read about Grouping operator 
  <div>
    <h1>Namaste React from functional component Title</h1>
  </div>
);

const HeaderComponent = () => (
  <div>
    {heading} {/* Render react element in component*/}
    {Title()} {/* Render react functional component in component*/}
    <Title /> {/* Render react functional component in component*/}
    <h1>Namaste React from functional component</h1>
  </div>
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
root.render(<HeaderComponent />);
