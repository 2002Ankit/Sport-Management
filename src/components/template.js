import React from "react"
import frameImage from "../assets/frame.png"
import SignupForm from "./signupForm"
import LoginForm from "./loginForm"
import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"
import "./template.css"

const Template = ({ title, desc1, desc2, image, formType, setisloggedIn , setUserInfo ,isloggedIn}) => {

    return (

        // Am using a common template for both login and sign up section

        <div className=" form-template flex justify-between w-11/12 max-w-[72.5rem] mx-auto  gap-x-20 gap-y-0 py-12">
            <div className="w-full max-w-[28.125rem] relative ml-[5rem] mb-[9.375rem] ">

                {/* description section start here */}
                <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem] ">{title}</h1>

                <p className='text-[1.125rem] leading[1.625rem] mt-4'>
                    <span className='text-richblack-100 desc1-text'>{desc1}</span>
                    <br />
                    <span className='text-blue-100 italic desc2-text '>{desc2}</span>
                </p>
                {/* description section ends here */}

                {/* Displaying login or signup form conditionally */}

                {formType === "Signup" ? (<SignupForm setisloggedIn={setisloggedIn} />) : (<LoginForm setisloggedIn={setisloggedIn}  isloggedIn={isloggedIn} />)}

                {/*now, displaying login or signup btn  */}
                <div className="flex flex-row items-center w-full  gap-3 mt-3 ">
                    <div className="h-[1px] bg-gray-900 w-full  "></div>
                    <p className="text-white relative ">OR</p>
                    <div className="h-[1px] bg-gray-900 w-full  "></div>
                </div>

                {formType === "Signup" ? (
                    <button className="signup-google-btn flex items-center justify-center mt-4 gap-x-3 border-white rounded-[6px] bg-gray-900 w-full py-1">
                        <FcGoogle className="text-[20px]" />
                        <p className="text-white text-[13px] py-[6px]">sign up with Google</p>
                    </button>
                ) : ("")
                }


                {formType === "login" ? (
                    <Link to="/Signup"><button className=" create-btn text-slate-300  mt-4  space-x-1 border-white rounded-[6px] bg-gray-900 w-full py-2 underline text-[15px]">Create New Account</button></Link>
                ) : ("")}

            </div>

            {/* Adding image */}

            <div className="relative w-11/12 max-w-[28.125rem] temp-image-responsive ">
                <img src={frameImage} alt="pattern" width={558}
                    height={504} loading="lazy" className="w-[24.375rem] relative temp-frame" />
                <img src={image} alt="students" width={558}
                    height={490} loading="lazy" className="absolute  -top-[0.8125rem] right-[4.375rem] w-[24.375rem] frame-image " />
            </div>
        </div>
    )
}
export default Template;