import React from "react";
import Cards from "../components/cards";
import Themes from "../components/Themes";
import HomeSport from "../components/HomeSport";
import Carousels from "../components/Carousels";
import HomeFooter from "../components/HomeFooter";
import Sportcards from "../components/Sportcards";

import "./home.css";

const Home = ({isregister,setIsregister,setRegcategory, regcategory})=>{
    return(
        <div className="home">
            <Themes/>
            <Sportcards setIsregister={setIsregister} setRegcategory={setRegcategory} regcategory={regcategory}/>
            <Cards/>
            <HomeSport/>
            <Carousels/>
            <HomeFooter/>
           
        </div>

    );
}
export default Home;