import { useState } from "react";
import { LOGO } from "../constants";
import { Link } from "react-router-dom";
const Logo = () => (
  <a href="/" className="logo-div">
    <img className="logo" src={LOGO} alt="logo" />
  </a>
);

const NavLinks = () => (
  <>
    <ul className="nav-items">
      <li>Home</li>
      <Link to="/about">
        <li>About</li>
      </Link>
      <li>Help</li>
      <li>Cart</li>
    </ul>
  </>
);

const UserProfile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let userName = "Samyak";
  return isLoggedIn ? (
    <>
      <i className="fa fa-cloud icon">{userName}</i>
      <button
        onClick={() => {
          setIsLoggedIn(!isLoggedIn);
        }}
      >
        Logout
      </button>
    </>
  ) : (
    <button
      onClick={() => {
        setIsLoggedIn(!isLoggedIn);
      }}
    >
      Login
    </button>
  );
};
const Cart = () => (
  <>
    <i className="fa fa-cart-plus icon">Cart</i>
  </>
);

const Header = () => (
  <div className="header">
    <Logo />
    <NavLinks />
    <div className="profile-section">
      <UserProfile />
      <Cart />
    </div>
  </div>
);

export default Header;
