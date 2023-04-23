import { createSlice } from "@reduxjs/toolkit";
const Slice = createSlice({
    name : "Rtoken",
    initialState : {
        value : {}
    },
    reducers : {
        addRtoken : (state, action)=>{
        state.value = action.payload
        }
    }
})
export const {addRtoken } = Slice.actions
export default Slice.reducer;