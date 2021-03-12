import React from 'react'
import { Link } from 'react-router-dom'

const ErrorScreen = () => {
    return (
        <>
        <section className='contact'>
            </section>
            <section className='content'>
                <div className='container'>
                    <div className='left-bar'>
                        <h1>Hoppá! Úgy tűnik valami hiba történt.</h1>
                        <span>404</span>
                        <p>Néha a dolgok elromlanak, vagy egy nemlétező dolgot keresel, kérünk töltsd be újra amit szeretnél, vagy térj vissza a főoldalra.</p>
                        <Link to='/'>Főoldalra</Link>
                    </div>
                    <div className='right-bar'>
                        <img src='images/error.svg' alt='404' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ErrorScreen
