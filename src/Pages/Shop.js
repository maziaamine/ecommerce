import React from 'react'
import Hero from '../Components/Hero'
import Popular from '../Components/Popular'
import Offers from '../Components/Offers'
import Newcollection from '../Components/Newcollection'
import New_letters from '../Components/New_letters'

function Shop() {
  return (
    <div  >
        <Hero/>
        <Popular/>
        <Offers/>
        <Newcollection/>
        <New_letters/>
    </div>
  )
}

export default Shop