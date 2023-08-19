import { createSlice } from "@reduxjs/toolkit";

const cartValueSlice = createSlice(
    {
        name :"cartValue",
        initialState:{
            value :0,
        },
        reducers :{
            incrementValue : (state,action) => {
                    state.value += action.payload;
            },
            decrementValue :(state,action) =>{
                 state.value -= action.payload;
            }
        }
    }
)

export const{incrementValue , decrementValue} =cartValueSlice.actions;

export default cartValueSlice.reducer;