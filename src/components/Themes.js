import React from "react";
import themeImage from "../assets/boy.png"

const Themes = () => {
    return (
        <div className="  w-full flex  justify-center items-center  mt-[3.75rem] relative">
            <div className="w-full ml-10 p-[15px] relative bottom-[50px]  ">
                <p className=" font-inter text-[45px] font-semibold text-slate-300  gap-3">IT'S TIME TO SHOW </p>
                <p className=" font-inter text-[45px]  font-semibold text-slate-300  gap-3 mt-2"> YOURSELF</p>
                <p className=" font-mono text-[42px]  text-slate-200 mt-[50px] italic">JOIN <span className=" text-[#FF671F] text-[42px] font-medium">KHELO</span> <span className=" text-[#FFFFFF] text-[42px] font-medium">INDIA</span> <span className=" text-[#046A38] text-[42px] font-medium">NOW !</span></p>
                <p className="max-w-[550px] mt-[50px] text-[20px] text-gray-400 font-thin">Participating in sports offers numerous physical
                    and mental health benefits, such as improved fitness,
                    strength, and endurance. It also promotes teamwork,
                    discipline, and sportsmanship. Sports can be a source
                    of fun and stress relief.....</p>
            </div>
            <div className="w-full mt-8">
                <img src={themeImage} width={550} height={450} className="w-[49.375rem] h-[40.625rem] "/>
            </div>


        </div>   
            

    );
}
export default Themes;