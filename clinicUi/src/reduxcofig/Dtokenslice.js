import { createSlice } from "@reduxjs/toolkit";
const Slice = createSlice({
    name : "token",
    initialState : {
        value : {}
    },
    reducers : {
        addtoken : (state, action)=>{
        state.value = action.payload
        }
    }
})
export const {addtoken } = Slice.actions
export default Slice.reducer;