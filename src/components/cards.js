import React from "react";
import indoor from "../assets/indoor.jpg"
import outdoor from "../assets/outdoor.jpg"
import { Link } from "react-router-dom";
import "./cards.css";

const Cards = () => {
    return (
        <div className="container-card w-full h-[100vh]  flex flex-col justify-center items-center  relative ">
            <div className="flex flex-col justify-center relative top-[7.5rem] mx-auto w-full">
                <div className=" card-heading-text text-[30px]  space-y-7 text-richblack-200 font-serif  relative  mx-auto ">Choose & Register your interested sports to play..</div>
                <div className=" h-[1px] bg-gray-600 w-[75.6rem] mx-auto relative top-6"></div>
            </div>

            <div className=" cards-responsive flex gap-10  relative top-[9.3rem]  w-full align-baseline items-center justify-evenly my-auto ">
                <div className=" cards bg-richblack-700 rounded-lg p-2 max-w-[360px] flex flex-col justify-center items-center hover:scale-105 transition-all duration-200 ease-linear cursor-pointer ">
                    <p className=" text-gray-400 text-[30px]  font-serif  mt-4">Indoor Sports</p>
                    <img src={indoor} alt="indoor" width={350} height={240} className="h-[220px] w-full mt-4 px-2 rounded-[100px]"></img>
                    <button className=" register-btn "><Link to="/indoor">Register Now</Link></button>

                </div>

                <div className=" cards bg-richblack-700 rounded-lg p-2 max-w-[360px] flex flex-col justify-center items-center  hover:scale-105 transition-all duration-200  ease-linear cursor-pointer ">
                    <p className=" text-gray-400 text-[30px] mt-4 font-serif  ">Outdoor Sports</p>
                    <img src={outdoor} alt="outdoor" width={350} height={240} className="h-[220px]  w-full mt-4 px-2 rounded-[100px]"></img>
                    <button className=" register-btn "><Link to="/outdoor">Register Now</Link></button>
                </div>
            </div>


        </div>
    )
}
export default Cards;