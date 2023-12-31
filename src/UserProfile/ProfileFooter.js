import React from 'react'
import { AiFillTwitterCircle } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillFacebook } from "react-icons/ai"

export const ProfileFooter = () => {
  return (
    <div className=' flex justify-evenly items-center gap-[5rem] text-[20px] font-sans text-richblack-800 font-normal '>
      <div><a href='https://www.google.com/' target={"_blank"}>Privacy Policy</a></div>
      <div><a href='https://www.google.com/' target={"_blank"}>Terms of Use</a></div>
      <div className=' flex justify-center items-center gap-[2rem] '>
        <div><a href="https://en.wikipedia.org/wiki/Twitter" target={"_blank"}><AiFillTwitterCircle className=' w-[25px] h-[25px]' /></a></div>
        <div><AiFillLinkedin className=' w-[25px] h-[25px] rounded' /></div>
        <div><AiFillFacebook className=' w-[25px] h-[25px] rounded' /></div>
      </div>
    </div>
  )
}
