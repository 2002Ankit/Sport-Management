import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import "./AccountSetting.css"
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const AccountSetting = ({setCurrentUserItem}) => {
    const [formdata, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address:"",
        skill:"",

    })

    const navigate = useNavigate();

    function changeHandler(event){
         setFormData((prevData)=>(
            {
                ...prevData,
            [event.target.name]:event.target.value
            }
         ))
    }

    function submitHandler(event){
          event.preventDefault();
          toast.success("info updated successfully");
          setCurrentUserItem(3);
          
    }


    return (
        
            <div className=" w-[70%]   mx-auto  relative  flex flex-col gap-[1.25rem]  ">
                
                    <div className="  flex mt-[1.875rem] justify-between items-center relative w-full p-[1.875rem]">
                        <h2 className=" text-[25px] font-semibold font-inter  text-black">Edit your account info..</h2>
                        <CgProfile className="text-[30px]  text-black" />
                    </div>

                    <form onSubmit={submitHandler} className=' mx-auto w-full '>
                        <div className="account-container ">
                            <div className="account-wrapper ">
                                <input type="text"
                                    required
                                    name="name"
                                    value={formdata.name}
                                    onChange={changeHandler}                                    
                                    id="name"                                

                                />
                                <div className="underline-text"></div>
                                <label htmlFor="name">Name</label>

                            </div>

                            <div className="account-wrapper">
                                <input type="text"
                                    required
                                    name="email"
                                    value={formdata.email}
                                    onChange={changeHandler}
                                    className="input-data"
                                    id="email"                                   

                                />
                                <div className="underline-text"></div>
                                <label htmlFor="email">Email Address</label>

                            </div>
                        </div>

                        <div className="account-container">
                            <div className="account-wrapper">
                                <input type="number"
                                    required
                                    name="phone"
                                    value={formdata.phone}
                                    onChange={changeHandler}
                                    id="phone"                                   
                                />
                                <div className="underline-text"></div>
                                <label htmlFor="phone">Phone Number</label>
                            </div>

                            <div className="account-wrapper">
                                <input type="text"
                                    required
                                    name="address"
                                    value={formdata.address}
                                    onChange={changeHandler}
                                    id="address"                                    
                                />
                                <div className="underline-text"></div>
                                <label htmlFor="address">Address</label>

                            </div>
                        </div>

                        <div className="account-container">
                            <div className="account-wrapper">
                                <input type="text"
                                    required
                                    name="skill"
                                    value={formdata.skill}
                                    onChange={changeHandler}
                                    className="input-data"
                                    id="skill"                             
                                    
                                />
                                <div className="underline-text"></div>
                                <label htmlFor="skill">Skill</label>
                            </div>
                        </div>

                        
                            <button className='btn-account'>Save Changes </button>
                            {/* <span><BsSend /></span> */}
                        
                    </form>
                
            </div>
        
    )
}

