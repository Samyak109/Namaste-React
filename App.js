import ReactDOM from "react-dom/client";
import * as zomatoData from "./zomato.json";

const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

const Logo = () => (
  <a href="/">
    <img
      className="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOOQowG2cFpBqxhqnpE5TGf-bNBINTkzf5DBlOzjxXOT6KiHrApDGKkILMi-LnkjSUHmg&usqp=CAU"
      alt="logo"
    />
  </a>
);

const NavLinks = () => (
  <>
    <ul className="nav-items">
      <li>Home</li>
      <li>About</li>
      <li>Help</li>
      <li>Cart</li>
    </ul>
  </>
);

const UserProfile = () => <i className="fa fa-cloud icon">Samyak</i>;

const Cart = () => (
  <>
    <i className="fa fa-cart-plus">Cart</i>
  </>
);
const Header = () => (
  <div className="header">
    <Logo />
    <NavLinks />
    <UserProfile />
    <Cart />
  </div>
);

const RestaurantCard = ({ imageURL, name, cuisines, deliveryTime }) => {
  console.log(imageURL);
  return (
    <div className="card">
      <img src={imageURL} alt="restaurant" />
      <h2>{name}</h2>
      <h3 className="cuisine">{cuisines.map((cuisine) => cuisine.name).join(",")}</h3>
      <h3>{deliveryTime}</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="cards">
      {zomatoData.SECTION_SEARCH_RESULT.map((restaurant) => {
        return <RestaurantCard
          imageURL={restaurant.info?.image?.url}
          name={restaurant.info.name}
          cuisines={restaurant.info.cuisine}
          deliveryTime={restaurant.order.deliveryTime}
        />;
      })}
    </div>
  );
};

const Footer = () => <h1>Footer</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing react element to root, render takes react element and modifies DOM
root.render(<AppLayout />);
