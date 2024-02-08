import React from 'react'
import './hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon  from '../Assets/arrow.png';
import hero_img from '../Assets/hero_image.png'
function Hero() {
  return (
    <div className='hero'>
      <div className='hero-left'>
           <h2>NEW ARRIVALS ONLY</h2>
           <div>
            <div className='hand-hand-icon'>
               <div style={{display:'flex'}}>
               <p >new</p> 
               <img src={hand_icon} alt="" width="50px" style={{marginLeft:'10px'}} className='handicon'/>
               </div>
           
            <p>collections</p>
            <p>for everyone</p>
            </div>
           </div>
           <div className='hero-latest-btn'>
             <div>Latest collection</div>
             <img src={arrow_icon} alt="" />
           </div>
      </div>
      <div className='hero-right'>
      <img src={hero_img} alt="" width="425px"/>
      </div>
    </div>
  )
}

export default Hero