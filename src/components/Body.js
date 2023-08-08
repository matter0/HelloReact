import { useEffect, useState } from "react";
import resList from "../utils/mockdata";
import RestroCard, { withPromoted } from "./RestroCard";
import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import React from "react";

const Body = () => {
  const [listofres, setlistofres] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredres, setfiteredres] = useState([]);

  const RestroPromoted = withPromoted(RestroCard);
  useEffect(() => {
    fetchdata();
  }, []);
  console.log(searchText);

  const fetchdata = async () => {
    const fdata = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8917987&lng=77.58368610000001&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING"
    );

    const json_data = await fdata.json();
    

    setlistofres(json_data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfiteredres(json_data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  console.log(listofres);
  onlineStat = useOnlineStatus();
  if (onlineStat === false) {
    return <h1> You are offline please connect back to internet</h1>;
  }

   if (listofres.length === 0) {
     return <Shimmer />;
    }

  return (
    <div className="body">
      <div className="filter flex items-center ">
        <div className="search m-4 p-4 space-x-4">
          <input
            type="text"
            className=" border border-solid border-black rounded-xl"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-2 py-1 bg-green-200 rounded-xl"
            onClick={() => {
              const filteredres = listofres.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfiteredres(filteredres);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 space-x-4  ">
          <button
            className="m-2 px-2 py-1 bg-blue-200 flex rounded-xl"
            onClick={() => {
              const filtered = listofres.filter(
                (res) => res.info.avgRating >= 4
              );
              setfiteredres(filtered);
            }}
          >
            filter button
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredres.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restraunt/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? ( <RestroPromoted resdata = {restaurant.info}/>) : (<RestroCard resdata={restaurant.info} />) };
           
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
