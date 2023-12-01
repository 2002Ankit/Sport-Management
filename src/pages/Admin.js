import React, { useState } from "react";
import { AiFillLock } from "react-icons/ai"
import { RiAdminFill } from "react-icons/ri"
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./Admin.css"
import HomeFooter from "../components/HomeFooter";

const Admin = ({ setisloggedIn, setisadminloggedIn }) => {
    const [formData, setformData] = useState({ userName: "", password: "", birthDate: "" })

    const [showPassword, setshowPassword] = useState(false);
    const [data, setData] = useState([]);


    const navigate = useNavigate();


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

        // validating an input field and extracting data from local storage

        const getadminArr = localStorage.getItem("adminsport");
        console.log(getadminArr);

        const { userName, password, birthDate } = formData;
        if (userName === "") {
            toast.error("email field is required!");
            return;
        } else if (!userName.includes("@")) {
            toast.error("email should includes @");
            return;
        } else if (password === "") {
            toast.error("password field is required!");
            return;
        } else if (password.length < 5) {
            toast.error("password field greater than five!");
            return;
        } else if (birthDate === "") {
            toast.error("birthdate required!");
            return;
        }
        else {

            if (getadminArr && getadminArr.length) {
                const admindata = JSON.parse(getadminArr);
                const adminlogin = admindata.filter((element) => {
                    return element.email === userName && element.password === password
                });
                console.log(adminlogin);

                if (adminlogin.length === 0) {
                    alert("invalid admin details");
                } else {
                    toast.success("Admin login succesfully");

                    localStorage.setItem("admin_login", JSON.stringify([...data, adminlogin]));

                    setisadminloggedIn(true);
                    setisloggedIn(false);
                    navigate("/adminDash");
                }
            }
        }


        const adminData = {
            ...formData
        }
        console.log(adminData);


    }
    return (
        // making an Admin form.
        <div className=" Admin-background">
            <form onSubmit={submitHandler}
                className=" admin-form flex flex-col justify-center items-center m-auto w-11/12 max-w-[475px] relative bg-transparent border border-richblack-100 shadow rounded-md p-4 mt-[6rem] ">

                <div className="flex gap-2 items-baseline justify-center  ">
                    <span className="text-red-500  text-[22px] "><AiFillLock /></span>
                    <h1 className="text-white font-semibold text-[24px]  ">Sign-In</h1>
                </div>
                <div className="h-[1px] w-[370px] bg-red-500 mt-8"></div>

                <div className="flex justify-center items-center gap-2 text-[24px]">
                    <span className="text-red-500  m-auto mt-8"><RiAdminFill /></span>
                    <h2 className="text-white text-[22px] underline text-center mt-7 w-full">Admin Login</h2>
                </div>
                <div className="w-full">
                    <label>
                        <p className="text-white text-[17px]">Username<span className=" text-pink-600">*</span></p>
                        <input type="email"
                            placeholder="Enter email"
                            autoComplete="off"
                            name="userName"
                            onChange={changeHandler}
                            value={formData.userName}
                            className=" p-2 mt-1 rounded-md w-full text-white bg-transparent border border-richblack-100 outline-none " />
                    </label>

                    <label>
                        <p className="text-white text-[17px] mt-4">Password<span className=" text-pink-600 ">*</span></p>
                        <input type={showPassword ? ("text") : ("password")}
                            placeholder="Enter password"
                            name="password"
                            onChange={changeHandler}
                            value={formData.password}
                            className=" p-2 mt-1 rounded-md w-full text-white bg-transparent border border-richblack-100 outline-none relative" />
                        <span onClick={() => setshowPassword((prev) => !prev)} className=" pic absolute text-red-500 right-[28px] text-center mt-[15px] text-[22px]   ">
                            {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>
                    <label>
                        <p className="text-white text-[17px] mt-4">Date of birth<span className=" text-pink-600">*</span></p>
                        <input type="date"
                            placeholder="Enter your birthDate "
                            name="birthDate"
                            onChange={changeHandler}
                            value={formData.birthDate}
                            className=" date-input p-2 mt-1 rounded-md w-full text-white bg-transparent border border-richblack-100 outline-none " />
                    </label>
                </div>
                <div className="flex flex-row gap-[90px] mt-4 relative  justify-center items-center ">
                    <button className="text-white bg-red-700 border p-2 px-5 mt-4 text-[17px] rounded-md hover:bg-red-500" >Login</button>

                    <p className="text-white underline right-0">Forgot your Password ?</p>
                </div>
            </form>

            <HomeFooter/>
        </div>


    );
}
export default Admin;