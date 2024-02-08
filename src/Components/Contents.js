import React from 'react'
import { Outlet } from 'react-router-dom'

function Contents() {
  return (
    <div>
        {Outlet}
    </div>
  )
}

export default Contents