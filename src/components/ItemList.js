import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { decrementValue, incrementValue } from "../utils/cartValueSlice";

const ItemList = ({ items }) => {
 
 
  const dispatch=useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  
  const handleAddItem = (item) =>{
    dispatch(addItem(item));
   
    dispatch(incrementValue(item.card.info.price ));
  } 
  const handleRemoveItem =(item) =>{
    dispatch(removeItem(item));
  
    dispatch(decrementValue(item.card.info.price));
  }
 
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.key}
          className="p-4 m-4 border-b-2 border-gray-200 shadow-lg text-left flex"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold"> {item.card.info.name}</span>
              <span>
                -₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute  ">
            <button className="p-2 mx-18 my-11 bg-black text-white shadow-lg   rounded-lg  " onClick={() => handleAddItem(item)}>+</button>
            </div>
            <div className=" absolute mx-8">
            <button className="p-2 my-11 mx-20  bg-black text-white shadow-lg   rounded-lg  " onClick={() => handleRemoveItem(item)}>-</button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full"/>
            
          </div>
        </div>
      ))}
      ;
    </div>
  );
};
export default ItemList;
