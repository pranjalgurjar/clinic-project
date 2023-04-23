import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// import MenuBar from "./MenuBar";

// import { Route,Routes } from "react-router-dom";


export default function Doctor(props) {
    var doctor_name = useSelector(state => state.dtoken.value.data.name)

    return (<>
        {/* <MenuBar data ={props.data} setlogin={props.setlogin}/> */}


        <div className="navbar navbar-expand-lg ">
            <div className="collapse navbar-collapse container-fluid" id="navbarText">
                <ul className="navbar-nav mr-auto h5">
                    <li className="nav-item active">
                        <Link to="" className="nav-link"><b>Home </b><span className="sr-only"></span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/receptionDetail" className="nav-link"><b>Reception Details</b></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/addReception" className="nav-link"><b>New Reception</b></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/patientDetail" className="nav-link"><b>Patient Details</b></Link>
                    </li>
                </ul>
                <span className="navbar-text">
                    <Link to="/profile" className="navbar-brand"><h5><b>Dr.({doctor_name})</b></h5></Link>&nbsp;
                    <Link to=""><b style={{ "cursor": "pointer" }}><h5 style={{ "color": "red" }} onClick={() => { props.setlogin("") }}>Log Out</h5></b></Link>
                </span>
            </div>
        </div>

    </>
    )
}