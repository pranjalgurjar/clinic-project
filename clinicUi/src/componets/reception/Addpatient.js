import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Addpatient() {
    const [gender, setGender] = useState("male")
    const [Pdata, setPdata] = useState({})
    const [Value, setValue] = useState(true)
    // console.log(gender)

    const token = useSelector(state => state.Rtoken.value.msg)

    var date = new Date().toLocaleDateString('en-CA')
    var namebox = undefined;
    var agebox = undefined;
    var phonebox = undefined;
    var tbox = undefined;
    var dbox = date
    var dainobox = undefined

    // console.log(date);





    const save = (event) => {
        var patientObj = {
            name: namebox.value,
            phoneNumber: phonebox.value,
            age: agebox.value,
            time: tbox.value,
            appointmentdate: dbox.value,
            sex: gender,
            dainosis: dainobox.value
        }
        //    console.log(patientObj)

        fetch("http://localhost:8082/api/patient/addpatient", {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type': 'application/json'
            },
            body: JSON.stringify(patientObj)
        }).then(Response => Response.json()).then(data => { setPdata(data); console.log(data) })

        event.preventDefault()
        event.target.reset()
    }



    return (<>
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong card-registration border border-primary" style={{ "borderRadius": "15px" }}>
                            <span className="text-right mr-3">
                                <Link to="/"><b class='fas fa-times' style={{ "font-size": "20px", "color": "red", }}>close</b></Link>
                            </span>
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Appointment Form</h3>
                                <form onSubmit={save}>

                                    <div className="row">
                                        <div className="col-md-6 mb-4">

                                            <div className="form-outline">
                                                <label className="form-label">Name</label>
                                                <input type="text" id="firstName" ref={n => namebox = n} className="form-control form-control-lg" required />
                                            </div>

                                        </div>
                                        <div className="col-md-6 mb-4">

                                            <div className="form-outline">
                                                <label className="form-label">phoneNumber</label>
                                                <input type="text" id="lastName" ref={p => phonebox = p} className="form-control form-control-lg" required />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-4 d-flex align-items-center">

                                            <div className="form-outline datepicker w-100">
                                                <label className="form-label">Age</label>
                                                <input type="number" ref={a => agebox = a} className="form-control form-control-lg" id="lastName" required />
                                            </div>

                                        </div>
                                        <div className="col-md-6 mb-4"  >
                                            <h6 className="mb-2 pb-1">Gender: </h6>

                                            <div className="form-check form-check-inline" >
                                                <label className="form-check-label" >Female</label>
                                                <input className="form-check-input" name="gender" onChange={() => { setGender("female") }} type="radio" value={gender} id="femaleGender" checked={gender == "female"} />
                                            </div>

                                            <div className="form-check form-check-inline">
                                                <label className="form-check-label">Male</label>
                                                <input className="form-check-input" name="gender" type="radio" value={gender} onChange={() => { setGender("male") }} id="maleGender" checked={gender == "male"} />
                                            </div>

                                            <div className="form-check form-check-inline">
                                                <label className="form-check-label">Other</label>
                                                <input className="form-check-input" name="gender" onChange={() => { setGender("other") }} type="radio" value={gender} id="otherGender" checked={gender == "other"} />
                                            </div>


                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-4 pb-2">

                                            <div className="form-outline">
                                                <label className="form-label">Time</label>
                                                <input type="time" id="firstName" ref={t => tbox = t} className="form-control form-control-lg" required />
                                            </div>

                                        </div>
                                        <div className="col-md-6 mb-4 pb-2">

                                            <div className="form-outline">
                                                <label className="form-label">Date</label>
                                                <input type="date" id="firstName" value={Value ? date : dbox.value} ref={d => dbox = d} className="form-control form-control-lg" onChange={() => setValue(false)} required />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-4 pb-2">
                                            <div className="form-outline">
                                                <label className="form-label">Daignosis</label>
                                                <input type="text" id="firstName" ref={n => dainobox = n} className="form-control form-control-lg" required />
                                            </div>

                                        </div>

                                    </div>
                                    <h5>{Pdata.status ? <b style={{ "color": "green" }}>{Pdata.msg}</b> : Pdata.status == false ? <b style={{ "color": "red" }}>{Pdata.msg}&nbsp;(Please check form Details)</b> : ""}</h5>
                                    <div className="mt-4 pt-2">
                                        <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}