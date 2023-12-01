import React from "react";
import { useState } from "react";
import IndoorOption from "./indoorOption";
import OutdoorOption from "./outdoorOption"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import HomeFooter from "./HomeFooter";


const RegistrationForm = ({ title, sportType, setisloggedIn }) => {

    const navigate = useNavigate();

    const [registrationData, setRegistrationData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        date: "",
        address: "",
        district: "",
        pinCode: "",
        state: "",
        nationality: "",
        caste: "",
        qualification: "High School",
        otherQualification: "",
        medicalIssue: "No",
        experience: "",
        outdoorOption: "",
        IndoorOption: ""
    });

    function changeHandler(event) {
        const { name, value, checked, type } = event.target
        setRegistrationData(prevRegistrationData => {
            return {
                ...prevRegistrationData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function submitHandler(event) {
        event.preventDefault();
        toast.success("Registration complete successfully")
        navigate("/Dashboard");
        setisloggedIn(true)
        const accountData = {
            ...registrationData
        }

        console.log(accountData);
    }
    return (
        <div>
            <form onSubmit={submitHandler}
                className="w-11/12 max-w-[50rem] flex flex-col  bg-green-500  m-auto rounded-md mt-8 mb-[5rem] relative">
                <h1 className=" mt-4 text-3xl font-bold text-white text-center">{title}</h1>
                <div className="flex  justify-evenly mt-4 gap-24 items-baseline w-full">
                    <label className=" w-full relative ml-4">
                        <p className=" text-[18px] font-sans font-semibold  gap-1  w-full ">First Name<span className=" text-pink-700">*</span></p>
                        <input
                            required
                            type="text"
                            placeholder="firstname"
                            name="firstName"
                            onChange={changeHandler}
                            value={registrationData.firstName}
                            className="bg-white rounded-[0.5rem]  p-[8px] outline-green-400 w-full" />

                    </label>
                    <label className="w-full relative mr-4">
                        <p className=" text-[18px] font-sans font-semibold  gap-1  w-full relative ">Last Name<span className=" text-pink-700">*</span></p>
                        <input
                            required
                            type="text"
                            placeholder="lastname"
                            name="lastName"
                            onChange={changeHandler}
                            value={registrationData.lastName}
                            className=" bg-white rounded-[0.5rem] outline-green-400  p-[8px] w-full relative " />

                    </label>
                </div>

                <div className="flex justify-evenly mt-4 gap-24 items-baseline w-full ">
                    <label className=" w-full relative ml-4" >
                        <p className=" text-[18px] font-sans font-semibold  gap-1 w-full relative  ">Email<span className=" text-pink-700">*</span></p>
                        <input
                            required
                            type="email"
                            placeholder="enter your email"
                            name="email"
                            onChange={changeHandler}
                            value={registrationData.email}
                            className="bg-white rounded-[0.5rem]  outline-green-400 p-[8px] w-full relative " />

                    </label>
                    <label className="w-full relative mr-4">
                        <p className=" text-[18px] font-sans font-semibold  gap-1 w-full relative ">Contact<span className=" text-pink-700">*</span></p>
                        <input
                            required
                            type="text"
                            placeholder="enter your mobile no."
                            name="contact"
                            onChange={changeHandler}
                            value={registrationData.contact}
                            className="bg-white rounded-[0.5rem] outline-green-400 w-full relative p-[8px]" />

                    </label>
                </div>

                <div className="flex justify-evenly mt-4 gap-24 items-baseline w-full relative ">
                    <label className=" w-full relative ml-4">
                        <p className=" text-[18px] font-sans font-semibold  gap-1 w-full relative  ">Choose your interested sport</p>
                        <div className=" w-full relative">
                            {sportType === "indoor" ? (<IndoorOption registrationData={registrationData} setRegistrationData={setRegistrationData} />) : (<OutdoorOption registrationData={registrationData} setRegistrationData={setRegistrationData} />)}
                        </div>
                    </label>

                    <label className=" w-full relative mr-4">
                        <p className=" text-[18px] font-sans font-semibold w-full relative  gap-1">Date of Birth<span className=" text-pink-700">*</span></p>
                        <input
                            required
                            type="date"
                            placeholder="MM/DD/YY"
                            onChange={changeHandler}
                            name="date"
                            value={registrationData.date}
                            className=" bg-white rounded-[0.5rem]  outline-green-400 p-[8px] w-full relative " />

                    </label>

                </div>

                <div className=" w-full relative ml-4">
                    <label className=" w-full relative ml-4 ">
                        <p className=" text-[18px] font-sans font-semibold  w-full relative mt-4 gap-1">Address <span className=" text-pink-700">*</span></p>
                        <input
                            required
                            type="text"
                            placeholder="Enter your address here"
                            name="address"
                            value={registrationData.address}
                            onChange={changeHandler}
                            className=" bg-white rounded-[0.5rem]   p-[8px]  w-[96%] relative outline-green-400 " />
                    </label>
                </div>
                <div className="flex  mt-4 gap-[70px] items-baseline w-full ">
                    <label className=" w-full relative ml-4">
                        <p className=" text-[18px] font-sans font-semibold w-full relative  gap-1">District<span className=" text-pink-700">*</span></p>
                        <input
                            required
                            type="text"
                            placeholder="district"
                            name="district"
                            value={registrationData.district}
                            onChange={changeHandler}
                            className=" bg-white rounded-[0.5rem] outline-green-400 p-[8px] w-full relative " />
                    </label>

                    <label className="w-full relative ">
                        <p className=" text-[18px] font-sans font-semibold w-full relative  gap-1">Pin Code<span className=" text-pink-700">*</span></p>
                        <input
                            required
                            type="text"
                            placeholder="Enter pin code"
                            name="pinCode"
                            value={registrationData.pinCode}
                            onChange={changeHandler}
                            className=" bg-white rounded-[0.5rem] outline-green-400 w-full relative  p-[8px] " />
                    </label>

                    <label className="w-full relative mr-4">
                        <p className=" text-[18px] font-sans font-semibold mr-8 gap-1">State<span className=" text-pink-700">*</span></p>
                        <input
                            required
                            type="text"
                            name="state"
                            value={registrationData.state}
                            onChange={changeHandler}
                            className=" bg-white rounded-[0.5rem] outline-green-400 p-[8px] w-full relative " />
                    </label>
                </div>

                <div className="flex justify-evenly mt-4 gap-24 items-baseline w-full ">

                    <label className=" w-full relative ml-4 ">
                        <p className=" text-[18px] font-sans font-semibold w-full relative gap-1  ">Nationality<span className=" text-pink-700">*</span></p>
                        <input
                            required
                            type="text"
                            name="nationality"
                            value={registrationData.nationality}
                            onChange={changeHandler}
                            className=" bg-white rounded-[0.5rem] outline-green-400 w-full relative p-[8px]" />
                    </label>

                    <label className=" w-full relative mr-4">
                        <p className=" text-[18px] font-sans font-semibold w-full relative  gap-1  ">Caste<span className=" text-pink-700">*</span></p>
                        <select
                            required
                            name="caste"
                            value={registrationData.caste}
                            onChange={changeHandler}
                            placeholder="please select"
                            className=" bg-white rounded-[0.5rem] w-full outline-green-400 relative  p-[8px]">
                            <option value="general">General</option>
                            <option value="obc">OBC</option>
                            <option value="SC">SC</option>
                            <option value="ST">ST</option>

                        </select>
                    </label>

                </div>
                <div className="flex justify-evenly mt-4 gap-24 items-baseline w-full ">
                    <label className=" w-full relative ml-4">
                        <p className=" text-[18px] font-sans font-semibold w-full relative  gap-1  ">Qualification<span className=" text-pink-700">*</span></p>
                        <select
                            required
                            name="qualification"
                            value={registrationData.qualification}
                            onChange={changeHandler}
                            placeholder="please select"
                            className=" bg-white rounded-[0.5rem] outline-green-400  w-full relative p-[8px]">
                            <option value="High School" >High School</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Diploma">Diploma</option>

                        </select>
                    </label>
                    <label className=" w-full relative mr-4">
                        <p className=" text-[18px] font-sans font-semibold  w-full relative gap-1  ">Other</p>
                        <input
                            type="text"
                            name="otherQualification"
                            placeholder="specify qualification"
                            value={registrationData.otherQualification}
                            onChange={changeHandler}
                            className=" bg-white rounded-[0.5rem]  outline-green-400 w-full relative p-[8px]" />

                    </label>
                </div>

                <div className="w-full">
                    <label className=" w-full relative ml-4">
                        <p className=" text-[18px] font-sans font-semibold mt-4 w-full relative ml-4 gap-1  ">Do you have any medical issues<span className=" text-pink-700">*</span></p>
                        <div className="flex  mt-3 gap-5 ml-8 items-baseline w-full relative ">
                            <div>
                                <input
                                    required
                                    type="radio"
                                    name="medicalIssue"
                                    value="Yes"
                                    id="Yes"
                                    onChange={changeHandler}
                                    checked={registrationData.medicalIssue === "Yes"}


                                />
                                <label htmlFor="Yes" className=" text-[18px]">Yes</label>
                            </div>

                            <div>
                                <input
                                    required
                                    type="radio"
                                    name="medicalIssue"
                                    value="No"
                                    id="No"
                                    onChange={changeHandler}
                                    checked={registrationData.medicalIssue === "No"} />
                                <label htmlFor="No" className=" text-[18px]">No</label>
                            </div>
                        </div>

                    </label>
                </div>

                <div className="w-full relative">
                    <label className=" w-full relative ml-4">
                        <p className=" text-[18px] font-sans font-semibold mt-4 w-full relative ml-4 gap-1  ">
                            Please list any Previous experience you have had playing this sport.<span className=" text-pink-700">*</span>
                        </p>
                        <textarea
                            required
                            placeholder="list your experience here"
                            name="experience"
                            value={registrationData.experience}
                            onChange={changeHandler}
                            className=" bg-white rounded-[0.5rem]  outline-green-400 p-[8px]  w-[90%] relative ml-4 mr-4"
                        />
                    </label>
                </div>

                <button className="  bg-blue-600 p-2 px-3 rounded-md text-white mt-4 hover:bg-blue-500 text-[20px] font-semibold w-[95px]  mx-auto mb-[4rem]">Submit</button>

            </form>
            <HomeFooter />
        </div>
    )
}
export default RegistrationForm;