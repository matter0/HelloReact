import { useState } from "react";
import resList from "../utils/mockdata";
import RestroCard from "./RestroCard";

const Body = () => {
  const [listofres, setlistofres] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-but"
          onClick={() => {
            const filtered = listofres.filter((res) => res.data.avgRating >= 4);
            setlistofres(filtered);
          }}
        >
          {" "}
          filter button{" "}
        </button>
      </div>
      <div className="restroContainer">
        {listofres.map((restaurant) => (
          <RestroCard key={restaurant.data.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
