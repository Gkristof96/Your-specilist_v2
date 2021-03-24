import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const ContactScreen = () => {
    return (
        <>
            <section className='background small-bg'></section>
            <section className='contact content'>
                <div className='white-container'>
                    <div className='leftbar'>
                        <h1>Írj nekünk!</h1>
                        <p>
                            Ha bármi kérdésed lenne felénk, vagy csak a testszésed szeretnéd tudtunkra adni, ragad meg a lehetőséget és írj nekünk egy levelet, vagy keres meg minket a lent található elérhetőségek valamelyikén, vagy az itt található űrlap segítségével
                        </p>
                        <ul>
                            <li><FaPhoneAlt className='icon'/>contact@yourspecialist.hu</li>
                            <li><FaEnvelope className='icon'/>06 1 456 345</li>
                            <li><FaMapMarkerAlt className='icon'/>Budapest</li>
                        </ul>
                    </div>
                    <div className='rightbar'>
                        <form>
                            <div className='flat-input'>
                                <input type='text' name='name' autoComplete='off' required/>
                                <label htmlFor='name' className='label-name'>
                                    <span className='content-name'>Név</span>
                                </label>
                            </div>
                            <div className='flat-input'>
                                <input type='text' name='email' required autoComplete='off' />
                                <label htmlFor='email' className='label-name'>
                                    <span className='content-name'>Email</span>
                                </label>
                            </div>
                            <div className='flat-input'>
                                <textarea name='message' required autoComplete='off' />
                                <label htmlFor='message' className='label-name'>
                                    <span className='content-name'>Üzenet</span>
                                </label>
                            </div>
                            <button type='submit'>Küldés</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactScreen
