import React, { useEffect, useState } from "react";
import "./Adminsurface";
import Dashboard from "./Dashboard";
import Indoor from "./Indoor";
import Outdoor from "./Outdoor";
import Users from "./Users";
import Setting from "./Setting";
import "./Adminsurface.css"

const Content = (props) => {
    const[update,setUpdate] = useState(false)

    useEffect(() => {
        setUpdate(!update)
       
        },[props.currentItem])        
  ;
  let currentItem = props.currentItem;
  
    return (
        <div className="Content">
            {currentItem==1 && <Dashboard/>}
            {currentItem==2 && <Users/>}
            {currentItem==3 && <Indoor/>}
            {currentItem==4 && <Outdoor/>}     
            
            {currentItem==5 && <Setting/>}
       
        </div>
    )
}
export default Content;