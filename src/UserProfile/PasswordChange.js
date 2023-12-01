import React, { useState, useRef } from 'react'
import toast from 'react-hot-toast';
import { RiLockPasswordFill, RiPassExpiredFill } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import "./PasswordChange.css";


export const PasswordChange = ({setisloggedIn}) => {
    const [formdata, setFormData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",

    })
    const [shownewPassword, setshownewPassword] = useState("false")
    const [showconfirmPassword, setshowconfirmPassword] = useState("false")
    const [showoldPassword, setshowoldPassword] = useState("false")
    
    const navigate = useNavigate();


    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formdata.newPassword !== formdata.confirmPassword) {
            toast.error("password do not match");
            return;
        }
        else {
            toast.success("password updated successfully");

        }
        console.log(formdata);
        
        navigate("/login");
        setisloggedIn(false);

    }
    return (
        <div >
            <div className=" w-[40%] h-[100vh]  mx-auto  relative ">
                <div className="flex flex-col  w-full  mt-[35px]  ">
                    <div className=" flex mt-[30px] justify-between items-center gap-11 w-full  ">
                        <h2 className=" text-[25px] font-semibold font-inter ml-12 text-black">Change Your Password</h2>
                        <RiLockPasswordFill className="text-[30px] mr-11 text-black" />
                    </div>

                    <form onSubmit={submitHandler} className=' flex flex-col gap-[70px] mt-[60px] w-full' >

                        <div className="input-passwordChange ">
                            <input type={showoldPassword ? ("text") : ("password")}                                
                                required
                                name="oldPassword"
                                value={formdata.oldPassword}
                                onChange={changeHandler}
                                id="oldPassword"
                                className='input-password'

                            />
                            <span onClick={() => setshowoldPassword((prev) => !prev)} className=' absolute right-6 top-4 text-[19px] text-richblack-700 hover:cursor-pointer' key="1">
                                {showoldPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </span>
                            <div className="underline-text"></div>
                            <label htmlFor="oldPassword">old Password<span className=' text-pink-700'>*</span></label>

                        </div>



                        <div className="input-passwordChange ">
                            <input type={shownewPassword ? ("text") : ("password")}                               
                                required
                                name="newPassword"
                                value={formdata.newPassword}
                                onChange={changeHandler}
                                id="newPassword"
                                className='input-password'
                            />
                            <span onClick={() => setshownewPassword((prev) => !prev)} className=' absolute right-6 top-4 text-[19px] text-richblack-700 hover:cursor-pointer'>
                                {shownewPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </span>
                            <div className="underline-text"></div>
                            <label htmlFor="newPassword">new Password<span className=' text-pink-700'>*</span></label>
                        </div>




                        <div className="input-passwordChange">
                            <input type={showconfirmPassword ? ("text") : ("password")}                               
                                required
                                name="confirmPassword"
                                value={formdata.confirmPassword}
                                onChange={changeHandler}
                                className='input-password'
                                id="confirmPassword"

                            />
                            <span onClick={() => setshowconfirmPassword((prev) => !prev)} className=' absolute right-6 top-4 text-[19px] text-richblack-700 hover:cursor-pointer'>
                                {showconfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </span>
                            <div className="underline-text"></div>
                            <label htmlFor="confirmPassword">confirm Password<span className=' text-pink-700'>*</span></label>
                        </div>



                        <button className='btn-saveChange'>Update Password </button>
                        {/* <span><BsSend /></span> */}

                    </form>
                </div>
            </div>
        </div>
    )
}
