import React, { useState } from 'react'
import { ArrowRightOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Sportdata } from '../Sportdata';

function SportDataCards({ data, setRegcategory, regcategory }) {
    
     
    function regbtnHandler(value) {
        
        const categoryType = Sportdata.filter((val) => val.category === value);
        const categoryItem = categoryType.map((item) => item.category)

        console.log(categoryType);

        setRegcategory(categoryItem[0]);   

        

    }
    return (
        <div className='sport-card' >
            <h2 className=' text-white mt-3 text-[20px] font-inter font-normal '>{data.sport} </h2>
            <img src={data.image} alt='img' className='card-sportimage mt-4' />

            {
                regcategory === "indoor" ?
                    (<Link to="/indoor"><button className='text-[15px] mt-2 mb-3 font-medium italic text-blue-100 hover:text-red-400' onClick={() => regbtnHandler(`${data.category}`)}  >Register now <span><ArrowRightOutlined/></span></button></Link>)
                    :
                    (<Link to="/outdoor"><button className='text-[15px] mt-2 mb-3 font-medium italic text-blue-100 hover:text-red-400' onClick={() => regbtnHandler(`${data.category}`)}  >Register now <span><ArrowRightOutlined/></span></button></Link>
                    )

            }        

        </div>

    )
}

export default SportDataCards