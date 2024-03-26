import React from 'react'
import { Navbar } from '../pages/Auth/Navbar'
import { Outlet } from 'react-router-dom'

const Weblayout = () => {
  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div>
        <Outlet/>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  )
}
export  default Weblayout;