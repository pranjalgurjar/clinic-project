import {  Route, Routes } from "react-router-dom";
import Addpatient from './componets/reception/Addpatient'
import Appointments from './componets/reception/Appointments'
import Updatepatient from './componets/reception/updatepatient'
import AddReception from "./componets/Doctor/addReception";
import ReceptionDetail from "./componets/Doctor/receptionDetail";
import UpdateReception from "./componets/Doctor/updateReception";
import PatientDetail from "./componets/Doctor/PatientDetail";
import Profile from "./componets/Doctor/Profile";

import Home from "./Home";
import Doctor from "./componets/Doctor/Doctor";
import Reception from "./componets/reception/Reception";
import Rlogin from "./componets/reception/Rlogin";
import Login from "./componets/Doctor/Login";



export default function App() {


    return (<>
    <div>
      <h1 className="text-info">Shree Shubh Clinic &nbsp; <img src="clinic.jpg" alt="clinic logo" height="45px" width="40px" /></h1>
    </div><hr />
     <Home/>
    
  

        <Routes>
          
        <Route exact path="/doctorlogin" element={<Login/>}/>

        <Route exact path="doctor" element={<Doctor/>}/>
        <Route exact path="/addReception" element={<AddReception/>}/>
        <Route exact path="/receptionDetail" element={<ReceptionDetail/>}/>
        <Route exact path="/updateReception" element={<UpdateReception/>}/>
        <Route exact path="/patientDetail" element={<PatientDetail/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
       
        
        <Route exact path="/receptionlogin" element={<Rlogin/>}/>

        <Route exact path="reception" element={<Reception/>}/>
        <Route exact path="/addpatient" element={<Addpatient/>}/>
        <Route exact path="/appointments" element={<Appointments/>}/>
        <Route exact path="/updatepatient" element={<Updatepatient/>}/>
       </Routes>
       
      
       </>)
}

 