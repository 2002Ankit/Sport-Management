import React, { useState } from "react";

const OutdoorOption = ({registrationData , setRegistrationData}) => {
    // const [registrationData, setRegistrationData] = useState({ outdoorOption: "" })
    function changeHandler(event){
        const{name , value , checked , type} = event.target
        setRegistrationData(prevRegistrationData =>{
            return{
                ...prevRegistrationData,
                [name]:type === "checkbox" ? checked : value
            }
        })
    }
    return (
        <select
            name="outdoorOption"
            value={registrationData.outdoorOption}
            onChange={changeHandler}
            placeholder="please select"
            className="bg-white rounded-[0.5rem] w-full relative p-[8px]">
            <option value="cricket">Cricket</option>
            <option value="soccer">Soccer</option>
            <option value="volleyball">Volley ball</option>
            <option value="golf">Golf</option>
            <option value="kho">Kho Kho</option>
            <option value="basket">Basket ball</option>

        </select>

    )
}
export default OutdoorOption