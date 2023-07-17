import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const userRestroMenu =(resId) =>{

    const[resInfo,setresInfo] = useState(null);

    useEffect(() => {
        fetchmenu();
    },[]);

const fetchmenu = async () =>{
 const data = await fetch(MENU_URL+resId);
 const json_data=await data.json();
  setresInfo(json_data.data);
}
return resInfo;
}
export default userRestroMenu;