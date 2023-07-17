import { useEffect, useState } from "react";
import React from 'react';
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import userRestroMenu from "../utils/useRestroMenu";


const RestroMenu =() =>{
    
    const {resId} = useParams();
    const resItem = userRestroMenu(resId);
    console.log(resItem);
    

   
    if(resItem  === null){
        console.log("here");
        return <Shimmer/>;
    }
     
    const{name, cuisines,costForTwoMessage}=resItem?.cards[0].card.card.info;

    const { itemCards } = resItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(itemCards);

    return (
        <div>
            <h1>{name}</h1>
            <h2>{cuisines}</h2>
            <h2>{costForTwoMessage}</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name} {item.card.info.price}</li>
                ))};
            </ul>
        </div>
    );
}
export default RestroMenu;