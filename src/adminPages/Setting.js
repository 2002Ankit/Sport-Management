import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { RiLockPasswordFill, RiPassExpiredFill } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./Settin.css";

 const Setting = () => {
    const [formdata, setFormData] = useState({
        newUser: "",
        newPassword: "",
        confirmPassword: "",

    })
    const [shownewPassword, setshownewPassword] = useState("false")
    const [showconfirmPassword, setshowconfirmPassword] = useState("false")      


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
            toast.success("Credential updated successfully");

        }
        console.log(formdata);       
        

    }
    return (
        <div >
            <div className=" w-[40%] h-[100vh]  mx-auto  relative ">
                <div className="flex flex-col  w-full  mt-[35px]  ">
                    <div className=" flex mt-[30px] justify-between items-center gap-11 w-full  ">
                        <h2 className=" text-[25px] font-semibold font-inter  text-black">Change Your Login Credential</h2>
                        <RiLockPasswordFill className="text-[30px]  text-black" />
                    </div>

                    <form onSubmit={submitHandler} className=' flex flex-col gap-[70px] mt-[60px] w-full' >

                        <div className="admin-setting ">
                            <input type="email"                                
                                required
                                name="newUser"
                                value={formdata.newUser}
                                onChange={changeHandler}
                                id="newUser"
                                className='admin-input'

                            />                           
                            <div className="Adminunderline-text"></div>
                            <label htmlFor="newUser">new email<span className=' text-pink-700'>*</span></label>

                        </div>



                        <div className="admin-setting ">
                            <input type={shownewPassword ? ("text") : ("password")}                               
                                required
                                name="newPassword"
                                value={formdata.newPassword}
                                onChange={changeHandler}
                                id="newPassword"
                                className='admin-input'
                            />
                            <span onClick={() => setshownewPassword((prev) => !prev)} className=' absolute right-6 top-4 text-[19px] text-richblack-700 hover:cursor-pointer'>
                                {shownewPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </span>
                            <div className="Adminunderline-text"></div>
                            <label htmlFor="newPassword">new Password<span className=' text-pink-700'>*</span></label>
                        </div>




                        <div className="admin-setting">
                            <input type={showconfirmPassword ? ("text") : ("password")}                               
                                required
                                name="confirmPassword"
                                value={formdata.confirmPassword}
                                onChange={changeHandler}
                                className='admin-input'
                                id="confirmPassword"

                            />
                            <span onClick={() => setshowconfirmPassword((prev) => !prev)} className=' absolute right-6 top-4 text-[19px] text-richblack-700 hover:cursor-pointer'>
                                {showconfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </span>
                            <div className="Adminunderline-text"></div>
                            <label htmlFor="confirmPassword">confirm Password<span className=' text-pink-700'>*</span></label>
                        </div>



                        <button className='adminUpdate-btn'>Update Credential </button>
                        {/* <span><BsSend /></span> */}

                    </form>
                </div>
            </div>
        </div>
    )
}
export default Setting;