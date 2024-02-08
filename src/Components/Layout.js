import React from 'react'
import { Nav } from 'react-bootstrap'
import Contents from './Contents'
import Footer from './Components/Footer'
function Layout() {
  return (
    <div>
        <Nav/>
        <Contents/>
       <Footer/>
    </div>
  )
}

export default Layout