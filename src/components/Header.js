import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("login");
  console.log("hi");
  onlineStat = useOnlineStatus();
  const cartItems=useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-orange-200 shadow-lg ">
      <div className="logoContainer">
        <img className="w-100" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-5">online Status : {onlineStat ? "Online" : "Offline"}</li>
          <li className="px-5 font-bold ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5 font-bold text-xl" > <Link to ='/cart'> Cart  ({cartItems.length} items) </Link></li>
          <li className="px-5 font-bold" >
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-5 font-bold"  >
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-5 font-bold" >
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="px-5"
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
