import ReactDOM from "react-dom/client";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Body from "./Components/Body";

const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing react element to root, render takes react element and modifies DOM
root.render(<AppLayout />);
