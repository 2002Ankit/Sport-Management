import React, { useEffect, useState } from "react";
import logo from "../assets/khelologoo.png"
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { GrMenu } from "react-icons/gr";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useRef } from "react";
import { CgProfile } from "react-icons/cg";
import "./navbar.css";

const items = [
    {
        label: (
            <Link to="/indoor">Indoor games</Link>
        ),
        key: '0',
    },
    {
        label: (
            <Link to="/outdoor">Outoor games</Link>
        ),
        key: '1',
    },

];

const Navbar = ({ isloggedIn, setisloggedIn, isadminloggedIn, setisadminloggedIn }) => {

    const [showNavItems, setShowNavItems] = useState(false);
    const navRef = useRef();

    useEffect(()=>{
        let handler = (e)=>{
            if(!navRef.current.contains(e.target)){
                setShowNavItems(false);
            }
            console.log(e.target);
            console.log(navRef);
        };
        document.addEventListener("mousedown",handler);

        return()=>{
            document.removeEventListener("mousedown",handler);
        }
    });

    const getLoginDetail = localStorage.getItem("user_login");
    // console.log(getLoginDetail);
    const detailObject = JSON.parse(getLoginDetail);   

    return (
        <div className="navbar flex justify-evenly items-center w-screen  py-6  h-[80px] bg-green-700 mx-auto" ref={navRef}>
            <Link to="/">
                <img src={logo} alt="logo" width={100} height={20} loading="lazy" className="rounded-full w-[130px] h-[80px] sticky mr-3 " ></img>
            </Link>

            {/* rendering of nav-items */}

            <nav className={showNavItems ? " nav-item responsive-nav-items" : "nav-item "} >

                <ul className={showNavItems ? "ul-style nav-responsive" : "ul-style"} >

                    <li className="text-white hover:text-richblack-800  font-medium cursor-pointer
                        transition-all duration-200 relative group">
                        <Link to="/">Home</Link>
                        <div class="absolute bottom-0 w-full h-1 bg-richblack-800 hidden group-hover:block
                           transition-all duration-200" ></div>
                    </li>

                    <li className="text-white font-medium hover:text-richblack-800 cursor-pointer
                        transition-all duration-200 relative group">
                        <Link to="/about">About Us</Link>
                        <div class="absolute bottom-0 w-full h-1 bg-richblack-800 hidden group-hover:block
                           transition-all duration-200" ></div>
                    </li>

                    <li className="text-white font-medium hover:text-richblack-800 cursor-pointer
                        transition-all duration-200 relative group">
                        <Link to="/contact">Contact Us</Link>
                        <div class="absolute bottom-0 w-full h-1 bg-richblack-800 hidden group-hover:block
                           transition-all duration-200" ></div>
                    </li>

                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space style={{color:"white",cursor:"pointer", font:"medium" }} >
                                Registration
                                <DownOutlined className=" text-[15px]" />                                
                            </Space>                            
                        </a>
                    </Dropdown>

                </ul>

                {/* conditional rendering of btn */}

                <div className={showNavItems ? "btn-style nav-responsive" : "btn-style"} >

                    {!isloggedIn && !isadminloggedIn &&
                        <Link to="/login"><button className="  text-white border border-richblack-700 rounded-[8px] py-1 px-3 hover:bg-richblack-800  cursor-pointer transition-all duration-200  ">Users login</button></Link>
                    }

                    {!isloggedIn && !isadminloggedIn &&
                        <Link to="/Admin"><button className=" text-white border border-richblack-700 rounded-[8px] py-1 px-3  hover:bg-richblack-800  cursor-pointer transition-all duration-200  ">Admin login</button></Link>
                    }

                    {!isloggedIn && !isadminloggedIn &&
                        <Link to="/Signup"><button className=" text-white border border-richblack-700 rounded-[8px] py-1 px-3  hover:bg-richblack-800  cursor-pointer transition-all duration-200 ">Signup</button></Link>
                    }

                    {isloggedIn && !isadminloggedIn &&
                        <Link to="/"><button className=" text-white border border-richblack-700 rounded-[8px] py-1 px-3  hover:bg-richblack-800  cursor-pointer transition-all duration-200  " onClick={() => {
                            setisloggedIn(false);
                            toast.success("Logged Out")
                        }}>log out</button></Link>
                    }

                    {isloggedIn && !isadminloggedIn &&
                        <Link to="/Dashboard"><button className=" text-white border border-richblack-700 rounded-[8px] py-1 px-3   hover:bg-richblack-800  cursor-pointer transition-all duration-200 ">Dashboard</button></Link>
                    }

                    {!isloggedIn && isadminloggedIn &&
                        <Link to="/"><button className=" text-white border border-richblack-700 rounded-[8px] py-1 px-3  hover:bg-richblack-800  cursor-pointer transition-all duration-200  " onClick={() => {
                            setisadminloggedIn(false);                            
                            toast.success("Logged Out")
                        }}>log out</button></Link>
                    }

                    {!isloggedIn && isadminloggedIn &&
                        <Link to="/adminDash"><button className=" text-white border border-richblack-700 rounded-[8px] py-1 px-3   hover:bg-richblack-800  cursor-pointer transition-all duration-200 ">Dashboard</button></Link>
                    }
                    
                    { isloggedIn &&
                           <p className="  text-[17px] text-richblack-800 font-sans font-medium"><span className=" flex justify-center text-[20px] text-richblack-700"><CgProfile/></span>{detailObject[0].map((detail)=>{
                              return detail.firstName;
                           })}</p>                        
                    }

                </div >

            </nav>


            <div className="menu-btn text-[20px] fixed right-[2rem]  h-[35px] w-[35px] bg-green-800 border-green-700 rounded-md  ">
                <GrMenu onClick={() => setShowNavItems(!showNavItems)} className=" flex items-center justify-center mx-auto mt-[7px] hover:cursor-pointer" />
            </div>
        </div >
    )
}
export default Navbar;