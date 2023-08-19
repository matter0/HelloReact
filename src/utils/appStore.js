import { configureStore } from "@reduxjs/toolkit";
import { CaseReducer } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import cartValue from "./cartValueSlice";
import cartValueReducer from "./cartValueSlice";
const appStore= configureStore(
    {
        reducer :{
            cart:cartReducer,
            cartValue : cartValueReducer,
        },
    }
);

export default appStore;