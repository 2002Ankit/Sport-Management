import React from 'react'
import { Dashboard } from './Dashboard'
import { PasswordChange } from './PasswordChange'
import { UserProfile } from './UserProfile'
import { AccountSetting } from './AccountSetting'

export const ProfileContent = ({currentuserItem , setisloggedIn , setCurrentUserItem}) => {
  return (
    <div>
      {currentuserItem==1 && <Dashboard/>}      
      {currentuserItem==2 && <UserProfile/>}
      {currentuserItem==3 && <PasswordChange setisloggedIn={setisloggedIn}/>}
      {currentuserItem==4 && <AccountSetting setCurrentUserItem={setCurrentUserItem}/>}
      
   
      
      
    </div>
  )
}
