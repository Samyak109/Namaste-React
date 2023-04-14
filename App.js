import ReactDOM from "react-dom/client";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/About";

const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing react element to root, render takes react element and modifies DOM
root.render(<RouterProvider router={appRouter} />);
