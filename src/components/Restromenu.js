import { useEffect, useState } from "react";
import React from 'react';
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";


const RestroMenu =() =>{
    const[resItem,setresItem]=useState(null);
    const {resId} = useParams();

    useEffect(() =>{
        fetchmenu();
    },[]);

    const fetchmenu =async ()=>{
        console.log("fuck");
        const data=await fetch (MENU_URL+resId);
        const json_data =await data.json();
        console.log(json_data.data);
        setresItem(json_data.data);
    }

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