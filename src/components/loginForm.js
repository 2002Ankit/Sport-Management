import React, { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, redirect } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"


import "./loginForm.css";


const LoginForm = ({ setisloggedIn, regcategory, isloggedIn }) => {

    console.log(regcategory);

    const [formData, setformData] = useState({ email: "", password: "" });

    const [data, setData] = useState([]);


    const navigate = useNavigate();

    const [showPassword, setshowPassword] = useState(false)

    function changeHandler(event) {
        setformData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))

    }

    function submitHandler(event) {
        event.preventDefault();

        // getting data from local storage

        const getuserArr = localStorage.getItem("usersport");
        // console.log(getuserArr);


        // validating various input field

        const { email, password } = formData;
        if (email === "") {
            toast.error("email field is required!");
            return;
        } else if (!email.includes("@")) {
            toast.error("email should includes @");
            return;
        } else if (password === "") {
            toast.error("password field is required!");
            return;
        } else if (password.length < 5) {
            toast.error("password field greater than five!");
            return;
        } else {

            //after getting data from local storage and length of data 
            if (getuserArr && getuserArr.length) {
                // converting data into objects
                const userdata = JSON.parse(getuserArr);
                // console.log(userdata);

                // after converting , use filter method to filter the value if equal.
                const userlogin = userdata.filter((element) => {
                    return (
                        element.email === email && element.password === password
                    )
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {

                    toast.success("User login succesfully");
                    localStorage.setItem("user_login", JSON.stringify([...data, userlogin]))

                    setisloggedIn(true);

                    {
                        regcategory === 'indoor' ?
                        navigate("/indoor") : navigate("/outdoor")
                    }

                    navigate("/");

                }
            }
        }

    }

    return (
        
            <form onSubmit={submitHandler} className="flex flex-col flex-wrap w-full gap-y-4 mt-6">
                <label className="w-full">
                    <p className="text-[0.875rem text-richblack-5 mb-1 leading-[1.375rem]">Email Address<sup className="text-pink-200">*</sup></p>
                    <input required type="email" placeholder="enter your email id"
                        onChange={changeHandler}
                        name="email"
                        value={formData.email}
                        autoComplete="off"
                        className="bg-richblack-800 login-input rounded-[0.5rem] text-richblack-5 w-full p-[12px] outline-none" />
                </label>

                <label className="w-full relative ">
                    <p className="text-[0.875rem text-richblack-5 mb-1 leading-[1.375rem]">Password<sup className="text-pink-200">*</sup></p>
                    <input required type={showPassword ? ("text") : ("password")} placeholder="enter your password"
                        onChange={changeHandler}
                        name="password"
                        value={formData.password}
                        autoComplete="off"
                        className=" bg-richblack-800 login-input rounded-[0.5rem] text-richblack-5 w-full p-[12px] outline-none" /><br />


                    <span onClick={() => setshowPassword((prev) => !prev)} className="absolute text-richblack-5 top-9 right-5 text-2xl ">
                        {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                    </span>

                    <Link to="#">
                        <p className="forget-text text-blue-300 relative text-right">Forget password</p>
                    </Link>

                </label>

                <button className=" login-btn w-full bg-yellow-50 border rounded-[6px] text-richblack-800 py-[10px] leading-4 text-[18px] font-semibold">Sign in</button>



            </form>
           
        
    )
}
export default LoginForm;