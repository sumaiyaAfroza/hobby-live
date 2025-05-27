import React, { use } from 'react'
import { Outlet } from 'react-router'
import Navbar from '../component/Navbar'
import Footer from '../pages/Footer'
import { ThemeContext } from '../Context/Theme'



const MainLayout = () => {
  const {theme} = use(ThemeContext)
  return (
    <div className='bg-gray-200 dark:bg-gray-800 w-full min-h-screen' data-theme={theme || 'light'}>
       
       <Navbar></Navbar>
       <Outlet></Outlet>
       <Footer></Footer>
        
    </div>
  )
}

export default MainLayout
