import React, { useState } from "react";
import { addtoken } from "../../reduxcofig/Dtokenslice";
import { addRtoken } from "/krishna MERN course/HOSPITAL PROJECT/hospital-ui/src/reduxcofig/Rtokenslice";
import { useDispatch, useSelector } from "react-redux";
import "./login.css"
import { Link } from "react-router-dom";

export default function Login(props) {
  const dispatch = useDispatch()
  const doctor = useSelector(state => state.dtoken.value)
  const reception = useSelector(state => state.Rtoken.value)
  const [msg, setmsg] = useState("")

  var emailbox = undefined;
  var passbox = undefined;


  var submit = (event) => {
    var doctorObj = {
      email: emailbox.value,
      password: passbox.value
    }
    fetch("http://localhost:8082/auth/login", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(doctorObj)
    }).then(Response => Response.json()).then(data => {

      //  var ldata = data.data
      //  console.log(data);
      if (data.data.email == "rohit@gmail.com" && data.status == true) {
        props.setlogin(1)
        dispatch(addtoken(data))
      }
      else {
        if (data.data.activeStatus == true && data.status == true) {
          props.setlogin(2)
          dispatch(addRtoken(data))
        } else {
          setmsg("please check your email or password")
          props.setlogin(0)
        }

      }
    })


    event.preventDefault()
    event.target.reset()
  }



  return (<>

    <div className="wrapper fadeInDown">
      <div id="formContent">



        <div className="fadeIn first">
          <h2>Login</h2>
          {/* <img src="clinic.jpg" id="icon" alt="User Icon" /> */}
        </div>


        <form onSubmit={submit}>
          <input type="text" id="login" className="fadeIn second" ref={n => emailbox = n} name="login" placeholder="login Id" required />
          <input type="text" id="password" className="fadeIn third" ref={p => passbox = p} name="login" placeholder="password" required />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>
        {doctor.status || reception.status ? "" : <h5><b style={{ "color": "red" }}>{msg}!</b></h5>}
        <div id="formFooter">
          <Link to="forgetpassword" className="underlineHover">Forgot Password?</Link>
        </div>

      </div>
    </div>



  </>)
}
