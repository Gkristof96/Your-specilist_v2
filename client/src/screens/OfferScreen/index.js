import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createOffer } from '../../actions/offerActions'
import Modal from '../../components/Modal'

const OfferScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [profession, setProfession] = useState('')
    const [description, setDescription] = useState('')
    const [isModalOpen, setModalOpen] = useState(false)

    const dispatch = useDispatch()

    const offerCreate = useSelector(state => state.offerCreate)
    const { success } = offerCreate

    useEffect(() => {
        if(success) {
            setName('')
            setEmail('')
            setCity('')
            setProfession('')
            setDescription('')

            setModalOpen(true)
        }
    },[success, dispatch])
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createOffer({name, email, city, profession, description}))
    }

    const closeModal = () => setModalOpen(false)
    return (
        <>
            <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
                <h1>Köszönjük a bizalmat!</h1>
                <p>A szakemberek hamarosan felkeresik önt.</p>
            </Modal>
            <section className='background large-bg'>
                <div className='text-container'>
                    <h1 className='text-container__title'>Nem akarsz keresgélni?</h1>
                    <p className='text-container__subtitle'>Ebben az esetben adj fel egy megbízást, és majd egy szakember megkeres az ajánlatával</p>
                </div>
            </section>
            <section className='offer content'>
                <div className='white-container'>
                    <h1>Töltsd ki az űrlapot, és várj a szakemberek válaszára</h1>
                    <form onSubmit={submitHandler}>
                        <div className='flat-input'>
                            <input 
                                type='text' 
                                name='name' 
                                autoComplete='off' 
                                required 
                                value={name} 
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label htmlFor='name' className='label-name'>
                                <span className='content-name'>Név</span>
                            </label>
                        </div>
                        <div className='flat-input'>
                            <input 
                                type='text' 
                                name='email' 
                                autoComplete='off' 
                                required 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label className='label-name' htmlFor='email'>
                                <span className='content-name'>Email</span>
                            </label>
                        </div>
                        <div className='flat-input'>
                            <input 
                                type='text' 
                                name='city' 
                                autoComplete='off' 
                                required 
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                            <label className='label-name' htmlFor='city'>
                                <span className='content-name'>Város</span>
                            </label>
                        </div>
                        <div className='flat-input'>
                            <input 
                                type='text' 
                                name='profession' 
                                autoComplete='off' 
                                required 
                                value={profession} 
                                onChange={(e) => setProfession(e.target.value)}
                            />
                            <label className='label-name' htmlFor='profession'>
                                <span className='content-name'>Szakma</span>
                            </label>
                        </div>
                        <div className='flat-input text'>
                            <textarea 
                                name='description' 
                                autoComplete='off' 
                                required 
                                value={description} 
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <label className='label-name' htmlFor='description'>
                                <span className='content-name'>Munka leírása</span>
                            </label>
                        </div>
                        <label htmlFor='checkbox'className='checkbox'>
                            <input name='checkbox' type='checkbox' required/>
                            <span>Elfogadom a <span>felhasználási feltételeket</span>!</span>
                        </label>
                        <button type='submit'>Küldés</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default OfferScreen
