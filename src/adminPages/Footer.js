import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillFacebook } from "react-icons/ai"
import "./Adminsurface";
import HomeFooter from "../components/HomeFooter";

const Footer = () => {
  return (
    <div className="Footer">
      <div><a href='https://www.google.com/' target={"_blank"}>Privacy Policy</a></div>
      <div><a href='https://www.google.com/' target={"_blank"}>Terms of Use</a></div>
      <div className=' flex justify-center items-center gap-[2rem] '>
        <div><a href="https://en.wikipedia.org/wiki/Twitter" target={"_blank"}><AiFillTwitterCircle className=' w-[25px] h-[25px]' /></a></div>
        <div><a ><AiFillLinkedin className=' w-[25px] h-[25px] rounded' /></a></div>
        <div><a ><AiFillFacebook className=' w-[25px] h-[25px] rounded' /></a></div>
      </div>
    </div>

  )
}
export default Footer;