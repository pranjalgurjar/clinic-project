import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name : "recepslice",
    initialState : {
        value : {}
    },
    reducers : {
        receptionlist : (state, action)=>{
        state.value = action.payload
        },
        changeRlist : (state,action)=>{
            let id = action.payload
          var  data = state.value.data.filter(ob=>id==ob.id)
          state.value= {data}
        }
    }
})
export const {receptionlist,changeRlist } = slice.actions
export default slice.reducer;