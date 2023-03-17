import ReactDOM from "react-dom/client";

const HeaderComponent = () => (
  <div style={{ border: "1px solid"}}>
    <img src="https://www.w3schools.com/howto/img_forest.jpg" alt="Logo" />
    <input type="text" placeholder="Search.."></input>
    <i className="fa fa-cloud"></i>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing react element to root, render takes react element and modifies DOM
root.render(<HeaderComponent />);
