import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare} from 'react-icons/ai'
const Footer = () => {
    return (
        <footer>
            <div className='footer-header'>
                <div className='logo'>
                    <img src='images/logo.png' alt='logo' />
                    <div className='text'>
                        <h1>Your Specialist</h1>
                        <h2>The best professionist’s</h2>
                    </div>
                </div>
                <div className='navigation'>
                    <ul>
                        <li><AiFillFacebook /></li>
                        <li><AiFillInstagram /></li>
                        <li><AiFillTwitterSquare /></li>
                    </ul>
                    <ul>
                        <li>Szakmák</li>
                        <li>Áralánlat</li>
                        <li>Kapcsolat</li>
                        <li>Bejelentkezés</li>
                    </ul>
                </div>
            </div>
            <div className='footer-bottom'>
                <span>Terms of usage | CopyRight © Kristof - 2020</span>
            </div>
        </footer>
    )
}

export default Footer
