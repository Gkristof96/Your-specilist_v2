import React from 'react'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
    return (
        <>
            <div className='background'></div>
            <div className='register-screen'>
                <div className='register-card'>
                    <h1>Regisztráció</h1>
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
                        <label>
                            Jelszó újra
                            <input />
                        </label>
                        <label>
                            <input type='checkbox' />
                            Elfogadom a <span>felhasználási feltételeket</span>!
                        </label>

                        <button type='submit'>Regisztráció</button>
                    </form>
                    <span>Van már felhasználód? <Link to='/login'>Jelentkez be</Link></span>
                </div>
            </div>
        </>
    )
}

export default RegisterScreen
