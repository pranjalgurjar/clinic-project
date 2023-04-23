import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name : "ActivePatientlist",
    initialState : {
        value : {}
    },
    reducers :{
        Activepatient : (state,action)=>{
         state.value = action.payload
        
        },
        changepatient : (state,action)=>{
            var ob = action.payload
            var data = state.value.data.filter(b=>ob.id!==b.id || ob.activeStatus!==b.activeStatus)
            state.value = {data}
            
        },
        dateveiw :(state,action)=>{
            var date = action.payload
            var data = state.value.data.filter(ob => date == ob.appointmentdate)
            state.value = {data}
        }
       
       
    }
})

export const {Activepatient,changepatient,dateveiw} = slice.actions
export default slice.reducer;