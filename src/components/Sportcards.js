import React, { useState } from 'react'
import { Sportdata, filterBtn } from '../Sportdata'
import SportDataCards from "./SportDataCards"
import "./Sportcards.css"

function Sportcards({ regcategory, setRegcategory}) {
  const [item, setItem] = useState(Sportdata);

  // parsing unique dataobject based on category
  const menuItems = [...new Set(Sportdata.map((val) => val.category))]

  const filterItems = (val)=>{
    const newItems = Sportdata.filter((newVal)=>newVal.category===val);
    setItem(newItems);
  }
 
  return (
    <div className='sports-container '>
      <div className='filterbtn-container'>
        <button onClick={() => setItem(Sportdata)} className='filter-btn text-white font-medium'>All</button>
        {
          menuItems.map((val) => (
            <button onClick={() => filterItems(val)} className='text-white font-medium filter-btn'>{val}</button>
          ))
        }

      </div>

      <div className='sportCard-container'>
        {
          item.map((data) => (
            <SportDataCards key={data.id} data={data}  setRegcategory={setRegcategory} regcategory={regcategory}/>
          ))
        }
      </div>
    </div>
  )
}

export default Sportcards