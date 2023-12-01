import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; import toast from "react-hot-toast";
import UserSignupform from "./UserSignupform";
import AdminSignupform from "./AdminSignupform";
import "./signupForm.css";


const SignupForm = ({ setisloggedIn }) => {

    const [accountType, setAccountType] = useState("users")


    function adminHandler() {
        setAccountType("admin");
    }

    function userHandler() {
        setAccountType("users");
    }


    return (
        <div>

            {/* designing of switch btn */}

            <div className="flex switch-btn  bg-richblack-800 p-1 gap-x-2 my-3 rounded-full max-w-max">
                <button className={`${accountType === "users"
                    ?
                    "bg-richblack-900 text-richblack-5 user-btn"
                    : "bg-transparent text-richblack-200 user-btn2 "} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={userHandler}

                >Users</button>


                <button className={`${accountType === "admin"
                    ?
                    "bg-richblack-900 text-richblack-5 admin-btn"
                    : "bg-transparent text-richblack-200 admin-btn2"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={adminHandler}
                >Admin</button>

            </div>

            {/* conditional rendering of signup and loginForm on basis of account type */}
            {accountType === "users" ? <UserSignupform setisloggedIn={setisloggedIn} /> : <AdminSignupform setisloggedIn={setisloggedIn} />}


        </div>
    )
}
export default SignupForm;