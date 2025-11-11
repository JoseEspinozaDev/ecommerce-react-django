import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const logout = () =>{
    const {logoutUser} = useAuth()
    useEffect(() =>{
        logoutUser()
    },[])

    return (
       <div className="text-center py-5">
        <div className="spinner-border text-secondary" role="status" />
      </div>
    );
}

export default logout;