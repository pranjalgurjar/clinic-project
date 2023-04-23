import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addpatient, changpatient, datewise } from "/krishna MERN course/HOSPITAL PROJECT/hospital-ui/src/reduxcofig/patientlistslice";
import { Link } from "react-router-dom";
import { UpdatePatient } from "/krishna MERN course/HOSPITAL PROJECT/hospital-ui/src/reduxcofig/updatepatientslice"

// import { datepatient } from "/krishna mern course/hospital project/hospital-ui/src/reduxcofig/patientlistslice";


export default function Appointments() {
    // const [filterdata, setfilterdata] = useState([])
    // const[deldata,setdeldat] = useState()
    const [Value, setValue] = useState(true)
    var dispatch = useDispatch()
    var token = useSelector(state => state.Rtoken.value.msg)

    var date = new Date().toLocaleDateString('en-CA')
    var datebox = date;



    var onLoad = () => {
        fetch("http://localhost:8082/api/patient/lists", {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.json()).then(data => { dispatch(addpatient(data)) })

    }


    var patient = useSelector(state => state.Patient.value.data)

    const reset = () => {
        onLoad()
        // setfilterdata([])
    }


    const del = (ob) => {
        fetch(`http://localhost:8082/api/patient/delete/${ob.id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.json()).then(data => data)

        //   setfilterdata([filterdata.filter(obj=>obj.id!==ob.id)])
        dispatch(changpatient(ob))


    }
    useEffect(() => {

        onLoad()

    }, [])

    const load = () => {
        datebox = datebox.value
        dispatch(datewise(datebox))
        // let pdetail = patient.filter(ob => datebox == ob.appointmentdate)
        // console.log("filter", pdetail);
        // setfilterdata(pdetail)

    }


    const update = (id) => {
        dispatch(UpdatePatient(id))

    }
    return (<>

        <div className="container mt-3">
            <div className="container-fluid border border-primary text-right bg-white" style={{ "borderRadius": "12px" }} >
                <span className=" ml-5 mr-3">
                    <Link to="/"><b class='fas fa-times' style={{ "font-size": "20px", "color": "red", }}>close</b></Link>
                </span>
                <div className="text-center mr-5 col-lg-12">
                    <h5>Appointments</h5>
                </div>
                <hr />
                <div className="row col-lg-12 ">
                    <div className="col-lg-3">
                        <input type="date" value={Value ? date : datebox.value} className="form-control" ref={d => datebox = d} onChange={() => { setValue(false) }} />
                    </div>
                    <div className="col-lg-3 text-left">
                        <button className="btn btn-info" onClick={load}>Get List</button>
                    </div> &nbsp;
                </div>
                <button className="btn btn-info" onClick={reset}>Refresh</button>

                <table class="table table-striped mt-3 border">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">S. No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Sex</th>
                            <th scope="col">Age</th>
                            <th scope="col">phoneNumber</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Daignosis</th>
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
                                {/* <td>{ob.address.raddress}</td> */}
                                <td>{ob.appointmentdate}</td>
                                <td>{ob.time}</td>
                                <td>{ob.daignosis}</td>
                                <td><Link to="/updatepatient"><button className="btn btn-warning" onClick={() => update(ob.id)}>Update</button></Link>&nbsp;<button className="btn btn-danger" onClick={() => del(ob)}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </>)
}