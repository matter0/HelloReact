import { useState } from "react";
import ItemList from "./components/ItemList";


const RestrauntCategory = ({ data }) => {
    const[showItem,setshowItem]=useState(false);
    const handleClick =() =>{
        showItem ? setshowItem(false) : setshowItem(true);
    }
  return (
    <div>
      {/* Header */}

      <div className="w-6/12 mx-auto my-2 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">{data.title}</span>
          <span> ↓  </span>
        </div>

      {showItem  && <ItemList items={data.itemCards} />}  
      </div>

      {/* Footer */}
    </div>
  );
};

export default RestrauntCategory;
