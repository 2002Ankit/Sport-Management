import React from "react";
import { HiOutlineUsers } from "react-icons/hi2"
import { CgGames } from "react-icons/cg"
import { FiSettings } from "react-icons/fi"
import { LuLayoutDashboard } from "react-icons/lu"
import "./Adminsurface.css"
import { Menu } from "antd";


const Sidebar = (props) => {
 
  let setCurrentItem=props.setCurrentItem;
  let currentItem=props.currentItem;
  
  return (
    <div className="sideMenu">
      <Menu
        className="sideMenuVertical"
        mode="vertical"
        onClick={(e) => (         
          
          setCurrentItem(e.key),        
          
          console.log(e),
          console.log(currentItem)
        )}

        items={[
          {
            label: "Dashboard",
            icon: <LuLayoutDashboard />,
            key: '1',
          },
          {
            label: "Users",
            icon: <HiOutlineUsers />,
            key: '2',
          },
          {
            label: "Indoor",
            icon: <CgGames />,
            key: '3',
          },
          {
            label: "Outdoor",
            icon: <CgGames />,
            key: '4',
          },
         
        
          {
            label: "Setting",
            icon: <FiSettings />,
            key: '5',
          },
        ]}>

      </Menu>

    </div>
  )
}
export default Sidebar;