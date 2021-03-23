import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { IoLogOutOutline, IoPersonSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const ProfileButton = ({userInfo, logoutHandler}) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false)
    return (
        <div className='profile-button' onClick={() => setDropdownOpen(!isDropdownOpen)}>
            <div className='button' >
                <img src={userInfo.image} alt={userInfo.name} />
                <span>
                    {userInfo.name}
                </span>
                {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown/>}
            </div>
            <div className={`dropdown ${isDropdownOpen && 'open'}`}>
                <Link to='/profile'>Profil<IoPersonSharp className='icon'/></Link>
                <span onClick={() => logoutHandler()}>
                    Kijelentkezés<IoLogOutOutline  className='icon'/>
                </span>
            </div>
        </div>
    )
}

export default ProfileButton
