import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



export default function UpdatePatient() {

    var id = useSelector(state => state.Patients.value)
    const token = useSelector(state => state.Rtoken.value.msg)

    // patient formfilup code start
    var patient1 = useSelector(state => state.Patient.value.data)
    console.log(patient1);
    const [pats, setpats] = useState({})
    const [Value, setValue] = useState(true)
    const [pdata, setData] = useState({})



    var load = () => {
        var pat = patient1.filter(ob => id == ob.id)
        pat.map(ob => { setpats(ob) })

    }

    var namebox = pats.name
    var phonebox = pats.phoneNumber;
    var appointmentdate = pats.appointmentdate;

    // console.log(token)

    var save = (event) => {
        const recObj = {
            name: namebox.value,
            phoneNumber: phonebox.value,
            appointmentdate: appointmentdate.value
        }
        fetch(`http://localhost:8082/api/patient/update/${id}`, {
            method: 'PUT',
            headers: {
                "Authorization": `Bearer ${token}`,
                'Content-type': 'application/json'
            },
            body: JSON.stringify(recObj)
        }).then(response => response.json()).then(data => { setData(data) })

        event.preventDefault()
        event.target.reset()
    }

    // console.log(pdata)

    useEffect(() => {
        load()
    })
    return (<>

        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong card-registration border border-primary" style={{ "borderRadius": "15px" }}>
                            <span className="text-right mr-3">
                                <Link to="/appointments"><b class='fas fa-times' style={{ "font-size": "20px", "color": "red", }}>close</b></Link>
                            </span>
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Patient Update Form</h3>
                                <form onSubmit={save}>

                                    <div className="row">
                                        <div className="col-md-6 mb-4">

                                            <div className="form-outline">
                                                <label className="form-label">Name</label>
                                                <input type="text" id="emailAddress" value={Value ? pats.name : namebox.value} ref={n => namebox = n} onChange={() => setValue(false)} className="form-control form-control-lg" required />
                                            </div>

                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-4 d-flex align-items-center">

                                            <div className="form-outline datepicker w-100">
                                                <label for="phoneNumber" className="form-label">phoneNumber</label>
                                                <input type="text" value={Value ? pats.phoneNumber : phonebox.value} ref={p => phonebox = p} className="form-control form-control-lg" onChange={() => setValue(false)} id="emailAddress" required />
                                            </div>

                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-4 pb-2">

                                            <div className="form-outline">
                                                <label className="form-label">appointmentdate</label>
                                                <input type="date" id="emailAddress" value={Value ? pats.appointmentdate : appointmentdate.value} ref={p => appointmentdate = p} className="form-control form-control-lg" onChange={() => setValue(false)} required />
                                            </div>

                                        </div>
                                        <h5>{pdata.status ? <b style={{ "color": "green" }}>{pdata.msg}</b> : <b style={{ "color": "red" }}>{pdata.msg}</b>}</h5>
                                    </div>



                                    <div className="mt-4 pt-2">
                                        <input className="btn btn-primary btn-lg" type="submit" value="Update Patient" />
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