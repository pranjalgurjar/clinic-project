import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import MenuBar from "./menuBar";

export default function Reception(props) {
  const reception_name = useSelector(state => state.Rtoken.value.data.name)
  return (<>
    {/* <MenuBar data ={props.data} setlogin={props.setlogin} /> */}

    <div className="navbar navbar-expand-lg">

      <div className="collapse navbar-collapse container-fluid" id="navbarText">
        <ul className="navbar-nav mr-auto h5">
          <li className="nav-item active">
            <Link to="" className="nav-link"><b>Home</b></Link>
          </li>
          <li className="nav-item">
            <Link to="/addpatient" className="nav-link"><b>New Appointment</b></Link>
          </li>
          <li className="nav-item">
            <Link to="/appointments" className="nav-link"><b>Appointments</b></Link>
          </li>
        </ul>
        <span className="navbar-text">
          <Link to="/profile" className="navbar-brand"><b>Mr./Mrs.({reception_name})</b></Link>&nbsp;
          <Link to="" ><b style={{ "cursor": "pointer" }} ><h5 style={{ "color": "red" }} onClick={() => { props.setlogin(0) }}>Log Out</h5></b></Link>
        </span>
      </div>
    </div>



  </>
  )
}