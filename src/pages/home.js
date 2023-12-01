import React from "react";
import Cards from "../components/cards";
import Themes from "../components/Themes";
import HomeSport from "../components/HomeSport";
import Carousels from "../components/Carousels";
import HomeFooter from "../components/HomeFooter";

import "./home.css";

const Home = ()=>{
    return(
        <div className="home">
            <Themes/>
            <Cards/>
            <HomeSport/>
            <Carousels/>
            <HomeFooter/>
           
        </div>

    );
}
export default Home;