import React from "react";
import RegistrationForm from "../components/registrationForm"

const Indoor = ({setisloggedIn , isloggedIn}) => {
    return (
        <RegistrationForm
            title="Indoor Sports Registration Form"
            sportType="indoor"
            setisloggedIn = {setisloggedIn}
        />

    );
}
export default Indoor;