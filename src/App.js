import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar"
import Home from "./pages/home"
import Login from "./pages/login"
import Signup from "./pages/Signup"
import Admin from "./pages/Admin";
import { UserDashboard } from "./UserProfile/UserDashboard";
import Indoor from "./pages/indoor";
import Outdoor from "./pages/outdoor";
import { useEffect, useState } from "react"
import PrivateRoute from "./components/PrivateRoute";
import PrivateRouteForm from "./components/PrivateRouteForm";
import Adminsurface from "./adminPages/Adminsurface";
import Contact from "./pages/contact";
import PrivateRouteAdmin from "./adminPages/PrivateRouteAdmin";
import About from "./pages/about";



function App() {
  const [isloggedIn, setisloggedIn] = useState(false);
  const[isadminloggedIn , setisadminloggedIn] = useState(false); 
  
  const[regcategory, setRegcategory] = useState('');

  console.log(regcategory);

  return (
    <div className=" background flex flex-col w-screen h-screen bg-richblack-900 overflow-x-hidden overflow-scroll ">
      <Navbar isloggedIn={isloggedIn} setisloggedIn={setisloggedIn} isadminloggedIn={isadminloggedIn} setisadminloggedIn={setisadminloggedIn}  />


      <Routes>
        <Route path="/" element={<Home  setRegcategory={setRegcategory} regcategory={regcategory}/>}  />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login setisloggedIn={setisloggedIn}  isloggedIn={isloggedIn}  regcategory={regcategory}/>}  />
        <Route path="/Signup" element={<Signup setisloggedIn={setisloggedIn} />} />
        <Route path="/Admin" element={<Admin setisloggedIn={setisloggedIn} setisadminloggedIn={setisadminloggedIn}/>} />

        <Route path="/Dashboard" element={
          <PrivateRoute isloggedIn={isloggedIn}>
            <UserDashboard setisloggedIn={setisloggedIn} />
          </PrivateRoute>
        } />

        <Route path="/indoor" element={
          <PrivateRouteForm isloggedIn={isloggedIn} setisloggedIn={setisloggedIn}>
            <Indoor setisloggedIn={setisloggedIn} />
          </PrivateRouteForm>
        }
        />

        <Route path="/outdoor" element={
          <PrivateRouteForm isloggedIn={isloggedIn} setisloggedIn={setisloggedIn}>
            <Outdoor setisloggedIn={setisloggedIn} />
          </PrivateRouteForm>
        }
        />

        <Route path="/adminDash" element={
          <PrivateRouteAdmin isadminloggedIn={isadminloggedIn} setisadminloggedIn={setisadminloggedIn}>
          <Adminsurface  />
        </PrivateRouteAdmin>
        } />
      </Routes>
    </div>
  )
}

export default App;
