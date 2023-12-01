import React from 'react'

function HomeFooter() {
  return (
    <div className=' w-[100vw] h-[90px] flex justify-evenly items-center mt-[7rem] bg-richblack-800  text-richblack-200'>
        <h3 className=' font-normal text-[18px] font-sans cursor-pointer'>Privacy Policy</h3>
        <h3 className=' font-normal text-[18px] font-sans cursor-pointer'>Terms of Use</h3>
        <div className=' flex flex-col justify-center items-start gap-3'>
            <span className=' font-medium text-[18px] font-sans'>Get In Touch</span>
            <span className=' font-normal text-[15px] font-sans'>Email: kheloIndia@gmail.com</span>
        </div>
    </div>
  )
}

export default HomeFooter