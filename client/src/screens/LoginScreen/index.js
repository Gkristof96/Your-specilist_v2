import React from 'react'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
    return (
        <>
            <div className='background'></div>
            <div className='login-screen'>
                <div className='login-card'>
                    <h1>Bejelentkezés</h1>
                    <Link to='/'>X</Link>
                    <form>
                        <label>
                            Email
                            <input />
                        </label>
                        <label>
                            Jelszó
                            <input />
                        </label>
                        <div className='login-settings'>
                            <label>
                                <input type='checkbox' />
                                Emlékezz rám!
                            </label>
                            <Link to='/'>
                                elfelejtett jelszó
                            </Link>
                        </div>

                        <button type='submit'>Bejelentkezés</button>
                    </form>
                    <span>Nincs még felhasználód? <Link to='/register'>Regisztrálj</Link> most!</span>
                </div>
            </div>
        </>
    )
}

export default LoginScreen
