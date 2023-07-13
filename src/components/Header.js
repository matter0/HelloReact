import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          className="logoClass"
          src={LOGO_URL}
        />
      </div>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Contact us</li>
          <li>My Account</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;