import React from 'react'
import { Navigate } from 'react-router-dom';

export default function PrivateRouteAdmin({isadminloggedIn ,  children}) {

  if(isadminloggedIn){
    return children;
  }
  else{
    return <Navigate to = "/Admin"/>
  }
}
