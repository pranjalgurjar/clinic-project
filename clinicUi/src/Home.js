import { useState } from "react";
import Login from "./componets/Doctor/Login";
import Doctor from "./componets/Doctor/Doctor";
import Reception from "./componets/reception/Reception";


export default function Home() {

    // const [options, setoption] = useState(0)
    const [isLogin, setLogin] = useState("")


    console.log(isLogin)






    return (<>
        <div className="container-fluid text-right">

            {isLogin == 1 ? <Doctor setlogin={setLogin} />
                : isLogin == 2 ? <Reception setlogin={setLogin} />
                    : <Login setlogin={setLogin} />}


        </div>



    </>)
}