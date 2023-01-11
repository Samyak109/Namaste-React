import React from "react";
import ReactDOM from "react-dom/client";
/*
Why do multiple JSX tags need to be wrapped
Ans - JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. You can’t return two objects from a function without wrapping them into an array. 
This explains why you also can’t return two JSX tags without wrapping them into another tag or a Fragment.
<> </> => It is fragment and do not leave trace on DOM

Why Camelcase in JSX ? 
JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. 
In your own components, you will often want to read those attributes into variables. 
But JavaScript has limitations on variable names. 
For example, their names can’t contain dashes or be reserved words like class.
For historical reasons, aria-* and data-* attributes are written as in HTML with dashes.

HTML to JSX Converter
https://transform.tools/html-to-jsx

Passing strings, numbers, JSExpressions we use single curly braces {}
You can even pass objects in JSX using {{}} 
Used for writing inline CSS 
style={{
      backgroundColor: 'black',
      color: 'pink'
    }}
The next time you see {{ and }} in JSX, know that it’s nothing more than an object inside the JSX curlies!

Inline style properties are written in camelCase. 
For example, HTML <ul style="background-color: black"> 
would be written as <ul style={{ backgroundColor: 'black' }}>  in your component.
*/
const heading = (
  <h1 id="title" key={"h1"}>
    Namaste From React
  </h1>
);

const Title = () => (
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
