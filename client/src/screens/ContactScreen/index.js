import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const ContactScreen = () => {
    return (
        <>
            <section className='contact'>
            </section>
            <section className='contact-content'>
                <div className='container'>
                    <div className='left-bar'>
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
                    <div className='right-bar'>
                        <form>
                            <label>
                                Név
                                <input />
                            </label>
                            <label>
                                Email
                                <input />
                            </label>
                            <label>
                                Üzenet
                                <textarea />
                            </label>
                            <button type='submit'>Küldés</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactScreen
