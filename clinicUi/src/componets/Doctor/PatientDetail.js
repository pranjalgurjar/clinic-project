import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Activepatient, changepatient, dateveiw } from "../../reduxcofig/Activepatientslice";

// import { datepatient } from "/krishna mern course/hospital project/hospital-ui/src/reduxcofig/patientlistslice";


export default function PatientDetail() {

    const [Value, setValue] = useState(true)
    var dispatch = useDispatch()
    var token = useSelector(state => state.dtoken.value.msg)
    var patient = useSelector(state => state.Activepatient.value.data)
    // var patient = [(Sort && Sort.length?Sort:[])]?.sort((ob1,ob2)=>ob1.id-ob2.id)

    // console.log(patient)

    var date = new Date().toLocaleDateString('en-CA')
    // console.log(date)
    var datebox = date;



    var onLoad = () => {
        fetch("http://localhost:8082/api/patient/list", {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.json()).then(data => { dispatch(Activepatient(data)) })

    }




    const load = () => {
        datebox = datebox.value
        dispatch(dateveiw(datebox))
        // let pdetail = patient.filter(ob => datebox == ob.appointmentdate)
        // console.log("filter", pdetail);
        // setfilterdata(pdetail)
        // // onLoad()
    }

    const reset = () => {

        // setfilterdata([])
        onLoad()
    }


    const Undo = (ob) => {
        fetch(`http://localhost:8082/api/patient/undo/${ob.id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.json()).then(data => data);
        dispatch(changepatient(ob))
        //   onLoad()  
    }


    const update = (ob) => {
        fetch(`http://localhost:8082/api/patient/Done/${ob.id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.json()).then(data => data);
        dispatch(changepatient(ob))
        //    onLoad()  
    }

    useEffect(() => {

        onLoad()
        reset()
    }, [])
    return (<>


        <div className=" container mt-3">
            <div className=" container-fluid border border-primary text-right bg-white" style={{ "borderRadius": "12px" }}>
                <span className=" ml-5 mr-3">
                    <Link to="/"><b class='fas fa-times' style={{ "font-size": "20px", "color": "red", }}>close</b></Link>
                </span>
                <div className=" row">
                    <div className="col-lg-12 text-center">
                        <h5>Patient Details</h5>
                    </div>
                    <hr />
                    <div className="col-lg-3 mt-3">
                        <input type="date" className="form-control" value={Value ? date : datebox.value} ref={d => datebox = d} onChange={() => { setValue(false) }} />
                    </div>
                    <div className="col-lg-3 mt-3 ml-1 text-left">
                        <button className="btn btn-info" onClick={load}>Get List</button>&nbsp;
                    </div>
                </div>
                {/* <button className="btn btn-warning" onClick={reset}>Refresh Data</button>&nbsp;
            &nbsp;<b style={{"color":"green"}} className="mt-2">please click on the refresh button to get data</b> */}


                &nbsp;&nbsp;

                <table class="table table-striped border">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">S. No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Sex</th>
                            <th scope="col">Age</th>
                            <th scope="col">phoneNumber</th>
                            <th scope="col">Clinic Address</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Dainosis</th>
                            <th scope="col">Opration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(patient && patient.length ? patient : [])?.map((ob, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{ob.name}</td>
                                <td>{ob.sex}</td>
                                <td>{ob.age}</td>
                                <td>{ob.phoneNumber}</td>
                                <td>{ob.address.raddress}</td>
                                <td>{ob.appointmentdate}</td>
                                <td>{ob.time}</td>
                                <td>{ob.dainosis}</td>
                                <td>{ob.activeStatus ? <button className="btn btn-success" onClick={() => update(ob)}>Diagnosed</button> : <button className="btn btn-danger" onClick={() => Undo(ob)}>Diagnose</button>}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </>)
}