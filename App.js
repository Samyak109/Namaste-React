import React from "react";
import ReactDOM from "react-dom/client";


/*  Bundlers
Parcel needs some space to do all of this and it takes via .parcel-cache
DO not Add .parcel-cache on repository
1. HMR - Hot module reloading using file watcher algorithm (C++)
2. Minify Code, chunking, bundling
3. Tree shaking - Remove unwanted code like logs and chunking
4. Server for hosting locally
5. Different Dev and Prod build
6. Image Optimizations and compressions
7. Caching while development
8. Backward compatibilty (using polyfills)
9. Can enable https on local using parcel
10. Provide source map for easy debugging
11. Manages Port Numbers
12. Consistent Hashing Algorithm for caching and bundling
13. Parcel is a Zero Config Bundler
*/
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