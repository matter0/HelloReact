import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("login");
  console.log("hi");
  onlineStat = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100">
      <div className="logoContainer">
        <img className="w-100" src={LOGO_URL} />
      </div>
      <div className="nav">
        <ul className="flex p-4 m-4 ">
          <li>online Status : {onlineStat ? "Online" : "Offline"}</li>
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
          <li>
            <Link to="/grocery">Grocery</Link>
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
