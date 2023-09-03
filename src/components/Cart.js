import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useState, useBetween } from "react";
import { Link } from "react-router-dom";

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);
  const cartVal = useSelector((state) => state.cartValue.value);
  const [cartValue,setcartValue] = useState(0);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart()); 
  };

  const updateCartval = () =>{
   setcartValue(
    cartItems.reduce(function(acc,cartitem){
      acc=acc + cartitem.card.info.price;
      return acc;
    },0)
  );
  }



  // setTimeout(setcartValue(
  //   cartItems.reduce(function (acc, cartitem) {
  //     acc = acc + cartitem.card.info.price;
  //     return acc;
  //   }, 0)
  // ),0);
console.log("cart rerender");
  return (
    <div className="text-center m-4 p-4">
      <div className="flex-auto items-center h-20  ">
        <span className="  w-6/12 p-4 font-bold   border-orange-400 shadow-lg">
          Items in The cart
        </span>
        <Link to="/payment">
        <button className="p-4 mx-0 bg-black text-white float-right my-0 w-1/12 " >
          {cartVal/100} 
        </button>
        </Link> 
        <button
          className="p-4 m-2 bg-black text-white float-right my-0 w-1/12"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
        <button className="p-4 m-2 bg-black text-white float-right my-0 w-1/12"  onClick={() =>updateCartval()} >
         ⟳
          </button> 
      </div>
      <div className="w-6/12 m-auto">
        <ItemList
          items={cartItems}
        />
      </div>
    </div>
  );
};

export default Cart;
