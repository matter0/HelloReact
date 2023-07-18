import { useEffect, useState } from "react";

const useOnlineStatus = () =>{
    const[onlineStatus,setonlinetatus] =useState(true);

    useEffect(()=>{
        window.addEventListener("offline",() =>{
            setonlinetatus(false);
        })
        window.addEventListener("online",() =>{
            setonlinetatus(true);
        })
    },[]);
    return onlineStatus;
}

export default useOnlineStatus;