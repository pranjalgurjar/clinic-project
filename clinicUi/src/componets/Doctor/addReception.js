import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function AddReception() {

  var namebox = undefined;
  var phonebox = undefined;
  var addressbox = undefined;
  var emailbox = undefined;
  var passbox = undefined;

  const [Recdata, setData] = useState({})

  const token = useSelector(state => state.dtoken.value.msg)
  // console.log(token)

  var save = (event) => {
    const recObj = {
      name: namebox.value,
      phoneNumber: phonebox.value,
      raddress: addressbox.value,
      email: emailbox.value,
      password: passbox.value
    }
    fetch("http://localhost:8082/api/reception/save", {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`,
        'Content-type': 'application/json'
      },
      body: JSON.stringify(recObj)
    }).then(response => response.json()).then(data => { setData(data) })

    event.preventDefault()
    event.target.reset()
  }

  // console.log(Recdata)
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

                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Reception Registration Form</h3>
                <form onSubmit={save}>

                  <div className="row">
                    <div className="col-md-6 mb-4">

                      <div className="form-outline">
                        <label className="form-label">Name</label>
                        <input type="text" id="emailAddress" ref={n => namebox = n} className="form-control form-control-lg" required />
                      </div>

                    </div>
                    <div className="col-md-6 mb-4">

                      <div className="form-outline">
                        <label className="form-label">Email</label>
                        <input type="text" id="emailAddress" ref={e => emailbox = e} className="form-control form-control-lg" required />
                      </div>

                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 d-flex align-items-center">

                      <div className="form-outline datepicker w-100">
                        <label for="phoneNumber" className="form-label">phoneNumber</label>
                        <input type="text" ref={p => phonebox = p} className="form-control form-control-lg" id="emailAddress" required />
                      </div>

                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline datepicker w-100">
                        <label for="Address" className="form-label">Address</label>
                        <input type="text" ref={a => addressbox = a} className="form-control form-control-lg" id="emailAddress" required />
                      </div>


                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">

                      <div className="form-outline">
                        <label className="form-label">Password</label>
                        <input type="text" id="emailAddress" ref={p => passbox = p} className="form-control form-control-lg" required />
                      </div>

                    </div>
                    <h5>{Recdata.status ? <b style={{ "color": "green" }}>{Recdata.msg}</b> : <b style={{ "color": "red" }}>{Recdata.msg}</b>}</h5>
                  </div>



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