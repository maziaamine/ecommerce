import React from 'react';
import './Offers.css'
import ececlusive_img from '../Assets/exclusive_image.png'
function Offers() {
  return (
    <div className='offers'>
        <div className='offers-left'> 
        <h1>Exclusive</h1>
        <h1>offers For You </h1>
        <p>ONLY ON BEST SEMLLERS PRODUCTS</p>
        <button>CHECK NOW</button>
        </div>
      
        
        <div className='offers-right'>
             <img src={ececlusive_img} alt='' width="250px"/>
        </div>
    </div>
  )
}

export default Offers