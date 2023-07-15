import { useEffect, useState } from "react";
import resList from "../utils/mockdata";
import RestroCard from "./RestroCard";
import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
  const [listofres, setlistofres] = useState([]);
  const [searchText,setsearchText] = useState("");
  const [filteredres,setfiteredres] =useState([]);
  useEffect(() => {
    fetchdata();
  }, []);
  console.log(searchText);

  const fetchdata = async () => {
    
    const fdata = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8917987&lng=77.58368610000001&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING"
    );
   
    const json_data = await fdata.json();
    

    setlistofres(json_data?.data?.cards[2]?.data?.data?.cards);
    setfiteredres(json_data?.data?.cards[2]?.data?.data?.cards);

  };

  console.log(listofres);

  if(listofres.length === 0){
    return (
       <Shimmer/>
    );
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e) => {
                setsearchText(e.target.value);
            }}/>
            <button onClick = {() => {
              const filteredres = listofres.filter((res) => 
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
            );

              setfiteredres(filteredres);
              
            }}>Search</button>
        </div>
        <button
          className="filter-but"
          onClick={() => {
            const filtered = listofres.filter((res) => res.data.avgRating >= 4);
            setlistofres(filtered);
          }}
        >
          filter button
        </button>
      </div>
      <div className="restroContainer">
        {filteredres.map((restaurant) => (
         <Link key={restaurant.data.id} to={"/restraunt/"+restaurant.data.id}> <RestroCard  resdata={restaurant} /> </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
