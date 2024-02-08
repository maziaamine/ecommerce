import React from 'react'
import data_product from '../Assets/data'
import Item from './Item'
import './popular.css'
function Popular() {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN </h1>
        <hr/>
        <div className='popular-item'>
             {data_product.map((item,index)=>(
                <Item  key={index} product={item} />
             ))}
        </div>
    </div>
  )
}

export default Popular