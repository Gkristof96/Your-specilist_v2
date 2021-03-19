import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaEnvelope, FaSignOutAlt, FaAward, FaCog, FaMapMarkerAlt } from 'react-icons/fa'
import Rating from '../../components/Rating'
import ProfessionBadge from '../../components/ProfessionBadge'
import { listProviderData } from '../../actions/providerActions'

const ProviderEditScreen = ({ match }) => {
    const dispatch = useDispatch()

    const id = match.params.id

    const providerData = useSelector(state => state.providerData)
    const { loading, error, provider } = providerData

    useEffect(() => {
        if (!provider._id || provider._id !== id) {
            dispatch(listProviderData(id))
        }
    },[dispatch,id,provider._id])

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
                                    {provider.professions.map((profession,index) => (
                                        <ProfessionBadge profession={profession} key={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='rightbar'>
                            <h1>{provider.name}</h1>
                            <h2><FaMapMarkerAlt className='icon'/>Hungary, {provider.city}</h2>
                            <h3>Értékelés</h3>
                            <form>
                                <label>
                                        Név
                                        <input type='email' />
                                </label>
                                <label>
                                        Email
                                        <input type='email' />
                                </label>

                                <select id="cars" name="cars">
                                    <option value="1">1 csillag </option>
                                    <option value="2">2 csillag </option>
                                    <option value="3">3 csillag </option>
                                    <option value="4">4 csillag </option>
                                    <option value="5">5 csillag </option>
                                </select>

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

export default ProviderEditScreen
