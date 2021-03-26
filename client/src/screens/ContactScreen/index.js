import axios from 'axios'
import React, { useState } from 'react'
import Loader from '../../components/Loader'
import Modal from '../../components/Modal'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const ContactScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isModalOpen, setModalOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const config = {
                headers: {
                  'Content-Type': 'application/json',
                },
              }
              await axios.post('/api/email',{name, email, message}, config)
              setLoading(false)
              setModalOpen(true)
              setName('')
              setEmail('')
              setMessage('')
        } catch(error) {
            console.log(error)
            setLoading(false)
        }
    }
    const closeModal = () => setModalOpen(false)
    return (
        <>
            <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
                <h1>Köszönjük az üzenetet!</h1>    
            </Modal>
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
                        <form onSubmit={handleSubmit}>
                            <div className='flat-input'>
                                <input type='text' name='name' autoComplete='off' required value={name} onChange={(e) => setName(e.target.value)}/>
                                <label htmlFor='name' className='label-name'>
                                    <span className='content-name'>Név</span>
                                </label>
                            </div>
                            <div className='flat-input'>
                                <input type='text' name='email' required autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <label htmlFor='email' className='label-name'>
                                    <span className='content-name'>Email</span>
                                </label>
                            </div>
                            <div className='flat-input text'>
                                <textarea name='message' required autoComplete='off' value={message} onChange={(e) => setMessage(e.target.value)}/>
                                <label htmlFor='message' className='label-name'>
                                    <span className='content-name'>Üzenet</span>
                                </label>
                            </div>
                            {loading && <Loader />}
                            <button type='submit'>Küldés</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactScreen
