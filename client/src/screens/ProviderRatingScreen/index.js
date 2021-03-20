import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import Rating from '../../components/Rating'
import ProfessionBadge from '../../components/ProfessionBadge'
import { listProviderData, createProviderReview } from '../../actions/providerActions'
import { PROVIDER_CREATE_REVIEW_RESET } from '../../constants/providerConstans'

const ProviderEditScreen = ({ match }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [rating, setRating] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const id = match.params.id

    const providerData = useSelector(state => state.providerData)
    const { provider } = providerData

    const providerReviewCreate = useSelector(state => state.providerReviewCreate)
    const {
        success: successProviderReview
    } = providerReviewCreate

    useEffect(() => {
        if(successProviderReview) {
            setName('')
            setEmail('')
            setRating('')
            setMessage('')
        }
        if (!provider._id || provider._id !== id) {
            dispatch(listProviderData(id))
            dispatch({ type: PROVIDER_CREATE_REVIEW_RESET })
        }
    },[dispatch,id,provider._id, successProviderReview])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createProviderReview(id,{
            name,
            email,
            rating,
            message
        }))
    }
    return (
        <>
            <section className='profile-background'></section>
            <section className='profile-content'>
                <div className='container'>
                        <div className='leftbar'>
                            <img src={provider.image} alt={provider.name} />
                            <div className='data-container'>
                                <Rating value={provider.rating}/>
                                <div className='contact-data'>
                                    <h2><FaPhoneAlt className='icon'/> {provider.tel}</h2>
                                    <h2><FaEnvelope className='icon'/> {provider.email}</h2>
                                </div>
                                <div className='professions'> 
                                    {/*{provider.professions.map((profession,index) => (
                                        <ProfessionBadge profession={profession} key={index} />
                                    ))}*/}
                                </div>
                            </div>
                        </div>
                        <div className='rightbar'>
                            <h1>{provider.name}</h1>
                            <h2><FaMapMarkerAlt className='icon'/>Hungary, {provider.city}</h2>
                            <div className='rating-card'>
                                <h3>Értékelés</h3>
                                <form onSubmit={submitHandler}>
                                    <label>
                                            Név
                                            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                                    </label>
                                    <label>
                                            Email
                                            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    </label>

                                    <select id="cars" name="cars" value={rating} onChange={(e) => setRating(e.target.value)}>
                                        <option value="1">1 csillag </option>
                                        <option value="2">2 csillag </option>
                                        <option value="3">3 csillag </option>
                                        <option value="4">4 csillag </option>
                                        <option value="5">5 csillag </option>
                                    </select>

                                    <label>
                                            Üzenet
                                            <textarea value={message} onChange={(e) => setMessage(e.target.value)}/>
                                    </label>
                                    <button type='submit'>Küldés</button>
                                </form>
                            </div>   
                        </div>
                </div>
            </section>
        </>
    )
}

export default ProviderEditScreen
