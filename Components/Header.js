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

export default Header;