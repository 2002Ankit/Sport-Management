import React, { useEffect, useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { getUserProfile } from './Userapi';
import { SpinnerDotted } from 'spinners-react';

export const UserProfile = () => {
  const [profileData, setProfileData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUserProfile().then((res) => {
      setProfileData(res.users[0]);
      setLoading(false);
    })
  }, []);

  return (
    <div className=' max-w-[34.375rem] h-[100vh] flex flex-col  items-center justify-center bg-transparent  mx-auto mt-5 '>
      <div className=' w-[100px] h-[100px] bg-green-200 flex justify-center items-center border rounded-[50%] mt-6'><CgProfile className=' text-[75px] text-green-400' /></div>
   
      {loading ? <SpinnerDotted className=' m-auto'/> :
               <div className=' flex flex-col justify-center items-center  mt-2 ' >
               <p className=' text-center mr-5  text-[30px] font-sans font-semibold text-blue-400'>{profileData.firstName} <span>{profileData.lastName}</span></p>
               <div className=' flex flex-col gap-1 mt-3 text-[20px] font-sans'>
                 <p className=''>email : <span className=' text-green-500'>{profileData.email}</span></p>
                 <p>phone : <span className=' text-green-500 '>{profileData.phone}</span></p>
                 <p>age : <span className=' text-green-500'>{profileData.age}</span></p>
                 <p>D.O.B : <span className=' text-green-500'>{profileData.birthDate}</span></p>
                 <p>height : <span className=' text-green-500'>{profileData.height}</span></p>
                 <p>weight : <span className=' text-green-500'>{profileData.weight}</span></p>
                 <p>blood group : <span className=' text-green-500'>{profileData.bloodGroup}</span></p>         
                 <p>area of interest in sport : <span className=' text-green-500'>Cricket</span></p>
               </div>
       
             </div>       
      }
      

      {/* <div className=' flex flex-col justify-center ml-6 mt-5' >
        <p className=' text-center mr-5  text-[30px] font-sans font-semibold'>{profileData.firstName} <span>{profileData.lastName}</span></p>
        <div className=' flex flex-col gap-1 mt-3 text-[20px] font-inter'>
          <p className=''>email : <span className=' text-green-500'>{profileData.email}</span></p>
          <p>phone : <span className=' text-green-500'>{profileData.phone}</span></p>
          <p>age : <span className=' text-green-500'>{profileData.age}</span></p>
          <p>D.O.B : <span className=' text-green-500'>{profileData.birthDate}</span></p>
          <p>height : <span className=' text-green-500'>{profileData.height}</span></p>
          <p>weight : <span className=' text-green-500'>{profileData.weight}</span></p>
          <p>blood group : <span className=' text-green-500'>{profileData.bloodGroup}</span></p>         
          <p>interested area of sport : <span className=' text-green-500'>Cricket</span></p>
        </div>

      </div> */}
    </div>
  )
}
