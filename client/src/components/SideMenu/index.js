import React from 'react'

const SideMenu = ({isMenuOpen, handleOpen}) => {
    return (
        <ul className={`sidemenu ${isMenuOpen && 'open'}`} onClick={handleOpen}>
            <li onClick={handleOpen}>Szakmák</li> 
            <li onClick={handleOpen}>Ajánlatkérés</li> 
            <li onClick={handleOpen}>Rólunk</li> 
            <li onClick={handleOpen}>Bejelentkezés</li>
        </ul>
    )
}

export default SideMenu
