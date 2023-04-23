import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function UpdateReception() {

    const [recob, setrecob] = useState({})
    const [Value, setValue] = useState(true)
    const [Recdata, setData] = useState({})

    var id = useSelector(state => state.Update.value)

    var reception = useSelector(state => state.receptionlist.value.data)
    // console.log(reception);

    var load = () => {
        var recp = reception.filter(ob => id == ob.id)
        recp.map(ob => setrecob(ob))

    }
    // console.log(recob)



    var namebox = recob.name;
    var phonebox = recob.phoneNumber;
    var passbox = recob.password;
    var passbox2 = undefined;


    const token = useSelector(state => state.dtoken.value.msg)
    // console.log(token)

    var save = (event) => {
        const recObj = {
            name: namebox.value,
            phoneNumber: phonebox.value,
            Oldpassword: passbox.value,
            password: passbox2.value,
        }
        fetch(`http://localhost:8082/api/reception/update/${id}`, {
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

    console.log(Recdata)
    useEffect(() => {
        load()
    })
    return (<>

        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong card-registration border border-primary" style={{ "borderRadius": "12px" }}>
                            <span className="text-right mr-3">
                                <Link to="/"><b class='fas fa-times' style={{ "font-size": "20px", "color": "red", }}>close</b></Link>
                            </span>
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Reception Update Form</h3>
                                <form onSubmit={save}>

                                    <div className="row">
                                        <div className="col-md-6 mb-4">

                                            <div className="form-outline">
                                                <label className="form-label">Name</label>
                                                <input type="text" id="emailAddress" value={Value ? recob.name : namebox.value} ref={n => namebox = n} onChange={() => { setValue(false) }} className="form-control form-control-lg" required />
                                            </div>

                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-4 d-flex align-items-center">

                                            <div className="form-outline datepicker w-100">
                                                <label for="phoneNumber" className="form-label">phoneNumber</label>
                                                <input type="text" value={Value ? recob.phoneNumber : phonebox.value} ref={p => phonebox = p} onClick={() => setValue(false)} className="form-control form-control-lg" id="emailAddress" required />
                                            </div>

                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-4 pb-2">

                                            <div className="form-outline">
                                                <label className="form-label">Old Password</label>
                                                <input type="text" id="emailAddress" value={recob.password} ref={p => passbox = p} className="form-control form-control-lg" required />
                                            </div>

                                        </div>
                                        <div className="col-md-6 mb-4 pb-2">

                                            <div className="form-outline">
                                                <label className="form-label">New Password</label>
                                                <input type="text" id="emailAddress" ref={ph => passbox2 = ph} className="form-control form-control-lg" required />
                                            </div>

                                        </div>
                                        <h5>{Recdata.status ? <b style={{ "color": "green" }}>{Recdata.msg}</b> : <b style={{ "color": "red" }}>{Recdata.msg}</b>}</h5>
                                    </div>



                                    <div className="mt-4 pt-2">
                                        <input className="btn btn-primary btn-lg" type="submit" value="Update" />
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