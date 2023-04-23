import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from "./Dtokenslice"
import receptionReducer from './Rtokenslice'
import patientlistslice from "./patientlistslice";
import Recepslice from "./Recepslice";
import Activepatientslice from "./Activepatientslice";
import updaterecepslice from "./updaterecepslice";
import updatepatientslice from "./updatepatientslice";
const store = configureStore({
    reducer: {
        dtoken: doctorReducer,
        Rtoken :receptionReducer,
        Patient : patientlistslice,
        receptionlist : Recepslice,
        Activepatient :Activepatientslice,
        Update : updaterecepslice,
        Patients : updatepatientslice,
    }
})
export default store;