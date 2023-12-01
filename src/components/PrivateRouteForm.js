import React from "react";
import { Navigate } from "react-router-dom";



const PrivateRouteForm = ({ isloggedIn, setisloggedIn, children }) => {

    if (isloggedIn) {
        return children;
    }
    else {
        return(
            <Navigate to="/login"/>              
            
        ) 
        
    }
}
export default PrivateRouteForm;