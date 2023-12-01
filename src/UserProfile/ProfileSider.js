import React from 'react'
import { Menu } from 'antd'
import {LuLayoutDashboard} from "react-icons/lu"
import { RiLockPasswordFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoIosSettings } from "react-icons/io";
import "./Profile.css"

export const ProfileSider = ({setCurrentUserItem}) => {
  return (
    <div className="user-sideMenu">
      <Menu
        className=" user-sideMenuVertical"
        mode="vertical"
        onClick={(e) => (          
          setCurrentUserItem(e.key),
          console.log(e)          
        )}

        items={[
          {
            label: "Dashboard",
            icon: <LuLayoutDashboard />,
            key: '1',
          },
          {
            label: "Profile",
            icon: <CgProfile />,
            key: '2',
          },
          {
            label: "Change Password",
            icon: <RiLockPasswordFill/>,
            key: '3',
          },
         
          {
            label: "Account Setting",
            icon: <IoIosSettings />,
            key: '4',
          },
          // {
          //   label: "Notification",
          //   // icon: <IoIosNotificationsOutline />,
          //   key: '5',
          // },
          // {
          //   label: "Setting",
          //   // icon: <FiSettings />,
          //   key: '6',
          // },
        ]}>

      </Menu>

    </div>
  )
}
