import { useEffect, useState } from "react";
import React from "react";
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import userRestroMenu from "../utils/useRestroMenu";
import RestrauntCategory from "../RestrauntCategory";

const RestroMenu = () => {
  const { resId } = useParams();
  const resItem = userRestroMenu(resId);
  

  if (resItem === null) {
    console.log("here");
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resItem?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold text-lg">{name}</h1>
      <h2 className="font-bold">{cuisines.join(", ")}</h2>
      <h2 className="font-bold text-xs">{costForTwoMessage}</h2>
      {categories.map((category) => <RestrauntCategory data={category?.card.card}/>)}
      
      
    </div>
  );
};
export default RestroMenu;
