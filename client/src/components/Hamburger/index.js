import React from 'react'

const Hamburger = ({isMenuOpen,handleOpen}) => {
    return (
        <button className={`hamburger-icon ${isMenuOpen && 'open'}`} onClick={handleOpen}>
            <div className='line' />
            <div className='line' />
            <div className='line' />
        </button>
    )
}

export default Hamburger
