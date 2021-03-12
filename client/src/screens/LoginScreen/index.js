import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
    return (
        <>
            <div className='background'></div>
            <div className='login-screen'>
                <div className='login-card'>
                    <h1>Bejelentkezés</h1>
                    <Link to='/'><FaTimes className='icon'/></Link>
                    <form>
                        <label className='input-group'>
                            Email
                            <input />
                        </label>
                        <label className='input-group'>
                            Jelszó
                            <input />
                        </label>
                        <div className='login-settings'>
                            <label>
                                <input type='checkbox' />
                                <span>Emlékezz rám!</span>
                            </label>
                            <Link to='/'>
                                elfelejtett jelszó
                            </Link>
                        </div>

                        <button type='submit'>Bejelentkezés</button>
                    </form>
                    <h2>Nincs még felhasználód? <Link to='/register'>Regisztrálj</Link> most!</h2>
                </div>
            </div>
        </>
    )
}

export default LoginScreen
