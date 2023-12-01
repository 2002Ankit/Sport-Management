import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./signupForm.css";


const UserSignupform = ({ setisloggedIn }) => {

    const [formData, setformData] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })
    const[data , setData] = useState([]);

    const navigate = useNavigate();
    const [showPassword, setshowPassword] = useState("false")
    const [showconfirmPassword, setshowconfirmPassword] = useState("false")
    

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
        if (formData.password !== formData.confirmPassword) {
            toast.error("Password do not match");
            return;
        }        

        const { firstName, lastName, email, password, confirmPassword } = formData;

        if (firstName === "") {
            toast.error('name field is requred!'); 
            return;        
            
        } else if (lastName === "") {
            toast.error('name field is requred!'); 
            return; 
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email!');  
            return;
        } else if (password === "") {
            toast.error('password field is requred!');  
            return;
        } else if (confirmPassword === "") {
            toast.error('password field is requred!');  
            return;
        } else if (password.length < 5) {
            toast.error('password length should be greater than five!'); 
            return; 
        } else {
            toast.success("account created succesfully");
            
            setisloggedIn(true);
            navigate("/");

            localStorage.setItem("usersport",JSON.stringify([...data,formData]));

        }

        const accountData = {
            ...formData
        }
       
        //  jo bhi data user form me fill kiya hai usse print kr rhe hai..
        
        console.log(accountData);        
        
    }


    return (

        <form onSubmit={submitHandler}>
         
            <div>
                <label>
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name<sup className="text-pink-200">*</sup></p>
                    <input required type="text"
                    
                        placeholder="enter your first name"
                        onChange={changeHandler}
                        name="firstName"
                        value={formData.firstName}
                        autoComplete="off"
                        className="bg-richblack-800 input-bg rounded-[0.5rem] text-richblack-5 w-full p-[7px] outline-none" />
                </label>

                <label>
                    <p className="text-[0.875rem] text-richblack-5 mb-1 mt-1 leading-[1.375rem]">Last Name<sup className="text-pink-200">*</sup></p>
                    <input required type="text"
                        placeholder="enter your last name"
                        onChange={changeHandler}
                        name="lastName"
                        value={formData.lastName}
                        autoComplete="off"
                        className=" input-bg bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[7px] outline-none" />
                </label>
            </div>

            <label>
                <p className="text-[0.875rem] text-richblack-5 mb-1 mt-1 leading-[1.375rem]">Email Address<sup className="text-pink-200">*</sup></p>
                <input required type="email"
                    placeholder="enter your email id"
                    onChange={changeHandler}
                    name="email"
                    value={formData.email}
                    autoComplete="off"
                    className="bg-richblack-800 input-bg rounded-[0.5rem] text-richblack-5 w-full p-[7px] outline-none" />
            </label>

            <div>
                <label className="w-full relative ">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 mt-1 leading-[1.375rem]">Password<sup className="text-pink-200">*</sup></p>
                    <input required type={showPassword ? ("text") : ("password")}
                        placeholder="enter your Password"
                        onChange={changeHandler}
                        name="password"
                        value={formData.password}
                        autoComplete="off"
                        className="bg-richblack-800 input-bg rounded-[0.5rem] text-richblack-5 w-full p-[7px] outline-none" />

                    <span onClick={() => setshowPassword((prev) => !prev)} className="absolute text-richblack-5 top-8 right-5 text-2xl ">
                        {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                    </span>
                </label>

                <label className="w-full relative ">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 mt-1 leading-[1.375rem]"> Confirm Password<sup className="text-pink-200">*</sup></p>
                    <input required type={showconfirmPassword ? ("text") : ("password")}
                        placeholder="Re-enter Password"
                        onChange={changeHandler}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        autoComplete="off"
                        className="bg-richblack-800 input-bg rounded-[0.5rem] text-richblack-5 w-full p-[7px] outline-none" />

                    <span onClick={() => setshowconfirmPassword((prev) => !prev)} className="absolute text-richblack-5 top-[65px] right-5 text-2xl ">
                        {showconfirmPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                    </span>
                </label>
            </div>

            <button className=" signup-btn w-full bg-yellow-50 border rounded-[6px] mt-6  text-richblack-800 py-[10px] leading-4 text-[18px] font-semibold">Create Account</button>
        </form>







    )
}
export default UserSignupform;
