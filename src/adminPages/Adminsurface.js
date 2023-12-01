import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Footer from "./Footer";
import "./Adminsurface.css"


const Adminsurface = () => {   
    const[currentItem, setCurrentItem]=useState(1)   
    console.log(currentItem);
    return (
        <div className="admin-dashboard">
            <div className="SidebarAndContent">
                <Sidebar  setCurrentItem={setCurrentItem} currentItem={currentItem}/>
                <Content  setCurrentItem={setCurrentItem} currentItem={currentItem}/>
            </div>
            <Footer />

        </div>
    )
}
export default Adminsurface;