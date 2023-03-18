import ReactDOM from "react-dom/client";

const HeaderComponent = () => (
  <div style={{ border: "1px solid"}}>
    {/* This is a Comment */}
    {/* JSX - Not Mandantory 
        ES 6 - Not Mandatory
    */}
    <h1>Starting Project</h1>   
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing react element to root, render takes react element and modifies DOM
root.render(<HeaderComponent />);
