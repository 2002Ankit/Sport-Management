import React from "react";
import RegistrationForm from "../components/registrationForm";

const Outdoor = ({setisloggedIn , isloggedIn})=>{
    return(
        <RegistrationForm
        title="Outdoor Sports Registration Form"
        sportType="outdoor"
        setisloggedIn={setisloggedIn}
        isloggedIn={isloggedIn}
    />

    );
}
export default Outdoor;