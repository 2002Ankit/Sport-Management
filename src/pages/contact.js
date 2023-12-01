import React, { useState } from "react";
import backgroundimg from "../assets/backgroundimg.avif"
import "./Contact.css";
import { CgMail } from "react-icons/cg"
import { BsSend } from "react-icons/bs"
import { BiLogoGmail } from "react-icons/bi"
import { AiFillTwitterCircle } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillFacebook } from "react-icons/ai"
import HomeFooter from "../components/HomeFooter";
import toast from "react-hot-toast";


const Contact = () => {
    const [formdata, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });


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
        // setFormData(" ");
        toast.success("we will answer you soon")

        const msgData = {
            ...formdata
        }

        console.log(msgData);


    }
    return (
        <div className=" w-[100vw] h-[100vh]">
            <div className="  text-white ">

                <div className=" contact relative ">
                    <div className=" relative top-[65px] left-[90px]">
                        <h2 className=" text-[45px] font-inter font-extrabold">Get In Touch</h2>
                        <h3 className="text-[20px] font-inter text-white font-medium ">We solve your queries as soon as possible.. </h3>
                    </div>
                </div>

                <div className=" contact-responsive flex  w-[70%]  mx-auto justify-around bg-richblack-800 relative -top-[125px] ">
                    <div className="flex flex-col  w-full  gap-[20px] ">
                        <div className=" flex mt-[30px] justify-between items-center ">
                            <h2 className=" text-[25px] font-semibold font-inter ml-8">Send us a Message</h2>
                            <CgMail className="text-[30px] mr-7" />
                        </div>

                        <form onSubmit={submitHandler}>
                            <div className="input-container">
                                <div className="input-wrapper">
                                    <input type="text"
                                        autoComplete="off"
                                        required
                                        name="name"
                                        value={formdata.name}
                                        onChange={changeHandler}
                                        className="input-data"
                                        id="name"

                                    />
                                    <div className="underline-text relative"></div>
                                    <label htmlFor="name">Name</label>

                                </div>

                                <div className="input-wrapper">
                                    <input type="text"
                                        required
                                        autoComplete="off"
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

                            <div className="input-container">
                                <div className="input-wrapper">
                                    <input type="number"
                                        required
                                        autoComplete="off"
                                        name="phone"
                                        value={formdata.phone}
                                        onChange={changeHandler}
                                        id="phone"
                                        className="input-data"
                                    />
                                    <div className="underline-text"></div>
                                    <label htmlFor="phone">Phone Number</label>
                                </div>

                                <div className="input-wrapper">
                                    <input type="text"
                                        required
                                        autoComplete="off"
                                        name="subject"
                                        value={formdata.subject}
                                        onChange={changeHandler}
                                        id="subject"
                                        className="input-data"
                                    />
                                    <div className="underline-text"></div>
                                    <label htmlFor="subject">Subject</label>

                                </div>
                            </div>

                            <div className="input-container">
                                <div className="input-wrapper">
                                    <input type="text"
                                        autoComplete="off"
                                        required
                                        name="message"
                                        value={formdata.message}
                                        onChange={changeHandler}
                                        className="input-data"
                                        id="message"

                                    />
                                    <div className="underline-text"></div>
                                    <label htmlFor="message">Message</label>
                                </div>
                            </div>

                            <div className="btn">
                                <button>Submit </button>
                                <span><BsSend /></span>
                            </div>
                        </form>


                    </div>

                    <div className="  information w-[21.875rem]  bg-[#4158d0]">
                        <h2 className="contact-text">Contact information</h2>

                        <div className="gmail-info">
                            <div className="gmail-logo"><BiLogoGmail className=" text-[35px]" /></div>
                            <div className=" mt-4 gmail">ankitsingh@gmail.com</div>
                        </div>

                        <div className=" flex gap-4 mb-4">
                            <span className="text-[25px] border rounded-md"><AiFillLinkedin /></span>
                            <span className="text-[25px] border rounded-md"><AiFillTwitterCircle /></span>
                            <span className="text-[25px] border rounded-md"><AiFillFacebook /></span>
                        </div>
                    </div>
                </div>


            </div>
            <HomeFooter />
        </div>

    );
}
export default Contact;