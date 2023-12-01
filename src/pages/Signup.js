import React from "react";
import Template from "../components/template";
import signupImg from "../assets/signup.png"

const Signup = ({ setisloggedIn }) => {
    return (
        <Template
            title="Join the million learning to sports with Khelo India"
            desc1="Participate in sports for today, tomorrow and beyond"
            desc2="Sports to future-proof your career"
            image={signupImg}
            formType="Signup"
            setisloggedIn={setisloggedIn}
        />
    )
}
export default Signup;