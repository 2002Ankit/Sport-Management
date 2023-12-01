import React from "react"
import Template from "../components/template"
import loginImg from "../assets/login.png"

const Login = ({ setisloggedIn , isloggedIn }) => {

    return (
        <Template
            title="Welcome Back"
            desc1="Participate in sports for today, tomorrow, and beyond."
            desc2="Sports to future-proof your career."
            image={loginImg}
            formType="login"
            setisloggedIn={setisloggedIn} 
            isloggedIn={isloggedIn}           

        />
    )
}
export default Login;