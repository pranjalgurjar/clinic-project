import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { receptionlist, changeRlist } from "../../reduxcofig/Recepslice";
import { UpdateReception } from "../../reduxcofig/updaterecepslice";

export default function ReceptionDetail() {
    var token = useSelector(state => state.dtoken.value.msg)


    const dispatch = useDispatch()



    var loadData = () => {
        fetch("http://localhost:8082/api/reception/lists", {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(Response => Response.json()).then(data => { dispatch(receptionlist(data)) })

    }



    useEffect(() => {
        loadData()



    }, [])
    var reception = useSelector(state => state.receptionlist.value.data)
    // console.log(reception);



    const remove = (id) => {
        fetch(`http://localhost:8082/api/reception/delete/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(Response => Response.json()).then(data => { dispatch(changeRlist(data.id)) });

    }


    // const reset = ()=>{
    //     setRdetail([])
    // }

    const Update = (id) => {

        dispatch(UpdateReception(id))
    }


    return (<>
        <div className=" container ml-5 mt-4">
            <div className="container-fluid border border-primary mr-5 ml-5 mt-3 mb-2 text-right bg-white" style={{ "borderRadius": "12px" }}>
                <span className="">
                    <Link to="/"><b class='fas fa-times' style={{ "font-size": "20px", "color": "red", }}>close</b></Link>
                </span>
                <div className="col-lg-6">
                    <h5>Reception Details</h5>
                </div>
                <hr />


                <div className="mt-2 mb-2">
                    <table className="table table-striped border">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">S. No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">phoneNumber</th>
                                <th scope="col">email id</th>
                                <th scope="col">Password</th>
                                <th scope="col">Clinic Address</th>
                                <th scope="col">Opration</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(reception && reception.length ? reception : [])?.map((ob, index) => <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{ob.name}</td>
                                <td>{ob.phoneNumber}</td>
                                <td>{ob.email}</td>
                                <td>{ob.password}</td>
                                <td>{ob.raddress}</td>
                                <td><Link to="/updateReception"><button className="btn btn-warning" onClick={() => { Update(ob.id) }}>Update</button></Link>&nbsp;<button className="btn btn-danger" onClick={() => { remove(ob.id) }}>Delete</button></td>

                            </tr>)}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </>)
}