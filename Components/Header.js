import { useState } from "react";
import { LOGO } from "../constants";
const Logo = () => (
  <a href="/" className="logo-div">
    <img className="logo" src={LOGO} alt="logo" />
  </a>
);
/* 
  - DO NOT USE useState inside if() or for()/while loop because this lead to inconsitency 
  and will hinder optimization
  - DO NOT USE usestate outside functional components
  - NEVER CREATE ANOTHER COMPONENT INSIDE A COMPONENT. If one component is re rendered 
  this will be created create that component many times
  - if we use useEffect() without providing dependency array param then callback
  function will be called after each render
*/
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
