import React from "react";
import childImg from "../assets/kids.jpg"
import readyImg from "../assets/athlete.jpg"
import HomeFooter from "../components/HomeFooter";
import { Carousel } from 'antd';
import "./about.css"

// const contentStyle = {
//     height: '260px',
//     color: '#fff',
//     lineHeight: '60px',
//     textAlign: 'center',
//     background: {image},
// };


const About = () => {
    return (
        <div className=" w-[100vw]">
           
            <Carousel autoplay className="about-carousel">
                <div className="about-background1">
                    <h3 className="about-heading" >A Platform for the next <br></br><span className=" text-[#FF671F]">generation <span className=" text-[#FFFFFF]">of</span> <span className=" text-[#349e6b]">players!</span></span></h3>
                </div>
                <div className="about-background2">
                 
                </div>
                <div className="about-background3">
                   
                </div>
                <div className="about-background4">
                   
                </div>
            </Carousel>

            <div className=" w-[100vw]    ">

                <div className=" about-resp w-full flex justify-evenly items-center gap-[6rem] mt-[6rem] ">
                    <div className=" w-[400px] h-[400px] image-aboutUs">
                        <img src={readyImg} alt="readyimg"  className=" w-full h-full rounded-lg " />
                    </div>
                    <div className=" w-[40%]">
                        <div className=" text-[30px] font-semibold text-white relative w-full ">About Us</div>
                        <p className=" text-[23px] text-richblack-25 mt-4 w-full relative h-full">Hello! Welcome to <span className="khelo-text">Khelo India!</span> Really happy to see you here.</p>
                        <p className=" text-[18px] text-richblack-200 w-full relative ">Thinking of taking a step towards a sports as a carrier in future reference? Then this platform that is Khelo India is specially designed for you. Here you have a choice of Indoor as well as Outdoor sports in order to play and you will also get multiple option for sport inside each kind of sports.If you want to play the sport then you can simply enroll for the particular sport that you want.Once you submitted the form you will get the further information about your application through your mail or you can also check your dashboard where you will get notify and also check status of your form.</p>
                    </div>
                </div>
            </div>

            <div className=" w-[100vw] mt-[7rem]  ">

                <div className=" story-resp w-full flex justify-evenly items-center gap-[6rem]  ">

                    <div className=" w-[40%]">
                        <div className=" text-[30px] font-semibold text-white relative w-full mb-[3rem]">Sports Story</div>

                        <p className=" text-[18px] text-richblack-200 w-full relative "> Sports is an extremely important component for the overall development of our nation. India, in the last few years has made steady progress in the field of sports. This tremendous potential needs to be showcased at a global platform. Its time we inspire young talent, give them top-notch infrastructure and training of the highest level. We need to inculcate a strong spirit of participation in sports that enables players to demonstrate their true potential. Only then can India realise its dream of becoming a sports super power.

                            The Khelo India programme has been introduced to revive the sports culture in India at the grass-root level by building a strong framework for all sports played in our country and establish India as a great sporting nation.</p>
                    </div>

                    <div className=" w-[400px] h-[400px] image-aboutUs">
                        <img src={childImg} alt="childimg"  className=" w-full h-full rounded-lg " />
                    </div>

                </div>
            </div>           

            <HomeFooter />
        </div>

    );
}
export default About;