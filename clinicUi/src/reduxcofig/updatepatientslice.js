import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name : "updatepatient",
    initialState : {
        value : ""
    },
    reducers :{
        UpdatePatient : (state,action)=>{
        state.value = action.payload
        }
       
    }
})

export const{UpdatePatient} = slice.actions
export default slice.reducer;