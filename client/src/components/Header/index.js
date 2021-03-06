import React, { useState } from 'react'
import SideMenu from '../SideMenu'
import Navbar from '../Navbar'

const Header = () => {
    const [isMenuOpen,setMenuOpen] = useState(false)

    const handleOpen = () => setMenuOpen(!isMenuOpen)
    return (
        <>
          <Navbar isMenuOpen={isMenuOpen} handleOpen={handleOpen} />
          <SideMenu isMenuOpen={isMenuOpen} handleOpen={handleOpen} /> 
        </>
    )
}

export default Header
