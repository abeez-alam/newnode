const { useEffect, useState } = require("react");
import {useAuth} from "../../Context/UserContext";
import {Outlet, Navigate} from "react-router-dom"
import axios from "axios";
import Spinner from "../Spinner";

export default  function PrivateRoutes(){
    const [auth, setauth] = useAuth();
    const [ok, setOk] = useState(false);
    
   useEffect(() =>{
  const authCheck = async () =>{
    const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/auth/api/user-auth`,
        {
            headers:{
                    Authorization : auth?.token,
                },
        }
    );
    console.log(res);
    if(res.data.ok){
        setOk(true);
    }else{
        setOk(false);
    }
  }
   })
};