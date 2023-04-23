import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name : "updaterecep",
    initialState : {
        value : ""
    },
    reducers :{
        UpdateReception : (state,action)=>{
        state.value = action.payload
        }
       
    }
})

export const{UpdateReception} = slice.actions
export default slice.reducer;