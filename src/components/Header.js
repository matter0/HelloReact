import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setbtnName] = useState("login");
  console.log("hi");
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logoClass" src={LOGO_URL} />
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "login" ? setbtnName("logout") : setbtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
