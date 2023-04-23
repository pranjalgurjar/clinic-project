import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name : "patientlist",
    initialState : {
        value : {}
    },
    reducers :{
        addpatient : (state,action)=>{
        state.value = action.payload
        },
        changpatient : (state,action)=>{
            var ob = action.payload
            var data = state.value.data.filter(obj=>obj.id!==ob.id)
            state.value = {data}
        },
        datewise : (state,action)=>{
            var date = action.payload
            var data = state.value.data.filter(ob => date == ob.appointmentdate)
            state.value = {data}
        }
       
    }
})

export const{addpatient,changpatient,datewise} = slice.actions
export default slice.reducer;