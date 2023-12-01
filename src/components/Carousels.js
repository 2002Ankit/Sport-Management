import React from "react";
import { CarouselData } from "./CarouselData";
import "./Carousels.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousels = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className="carousels-container">

            <div className=" mt-5 text-[25px] font-serif font-semibold text-gray-400 flex flex-col gap-6 m-auto">
                <h2 className=" text-center">Know some legends quotes</h2>
              <div className=" h-[1px] bg-gray-700 w-[75%] m-auto"></div>
            </div>

            <div className="cards-container">
                <Slider {...settings}>
                    {
                        CarouselData.map((data) => (
                            <div className="card-container" key={data.id}>

                                <div className="card-image">
                                    <img src={data.image} className="image" />
                                </div>
                                <div className="card-quote">
                                    {data.quote}
                                </div>
                                <div className="card-name italic  w-full">
                                    {data.name}
                                </div>

                            </div>

                        ))
                    }
                </Slider>

            </div>

        </div>
        
    )
}
export default Carousels;