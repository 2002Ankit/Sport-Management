import React, { useState } from "react";

const IndoorOption = ({registrationData , setRegistrationData}) => {
    // const [registrationData, setRegistrationData] = useState({ indoorOption: "" })

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
            name="indoorOption"
            value={registrationData.indoorOption}
            onChange={changeHandler}
            placeholder="please select"
            className="bg-white rounded-[0.5rem] outline-green-400 w-full p-[8px]"
            >
            <option value="chesss" >Chess</option>
            <option value="tableTennis">Table tennis</option>
            <option value="Carrom">Carrom</option>
            <option value="Card">Cards game</option>
            <option value="badminton">Badminton</option>

        </select>

    )
}
export default IndoorOption