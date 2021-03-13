import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
    return (
        <>
            <div className='background'></div>
            <div className='register-screen'>
                <div className='register-card'>
                    <h1>Regisztráció</h1>
                    <Link to='/'><FaTimes className='icon'/></Link>
                    <form>
                        <label className='input-group'>
                            Név
                            <input />
                        </label>
                        <label className='input-group'>
                            Email
                            <input />
                        </label>
                        <label className='input-group'>
                            Jelszó
                            <input />
                        </label>
                        <label className='input-group'>
                            Jelszó újra
                            <input />
                        </label>
                        <label className='checkbox'>
                            <input type='checkbox' />
                            <span>Elfogadom a <span>felhasználási feltételeket</span>!</span>
                        </label>

                        <button type='submit'>Regisztráció</button>
                    </form>
                    <h2>Van már felhasználód? <Link to='/login'>Jelentkez be</Link></h2>
                </div>
            </div>
        </>
    )
}

export default RegisterScreen
