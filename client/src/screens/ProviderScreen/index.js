import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaEnvelope, FaAward,  FaMapMarkerAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../../components/Rating'
import ProfessionBadge from '../../components/ProfessionBadge'
import { listProviderData } from '../../actions/providerActions'
import Loader from '../../components/Loader'

const ProviderScreen = ({match}) => {
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
                    {loading && <Loader />}
                    {error && <h1>{error}</h1>}
                    <div className='leftbar'>
                        <img src={provider.image} alt={provider.name} />
                        <div className='data-container'>
                            <Rating value={provider.rating}/>
                            <div className='contact-data'>
                                <h2><FaPhoneAlt className='icon'/> {provider.tel}</h2>
                                <h2><FaEnvelope className='icon'/> {provider.email}</h2>
                            </div>
                           
                            <div className='action-buttons'>
                                    <Link to={`/provider/${id}/rating`}>Értékeld a munkám <FaAward className='icon'/></Link>
                            </div>
                        </div>
                    </div>
                    <div className='rightbar'>
                        <h1>{provider.name}</h1>
                        <h2><FaMapMarkerAlt className='icon'/>Hungary, {provider.city}</h2>
                        <div className='professions'> 
                            {provider.professions.map((profession,index) => (
                                <ProfessionBadge profession={profession} key={index} />
                            ))}
                        </div>
                        <h3>Bemutatkozás</h3>
                        <p>{provider.bio}</p>

                        <h3>Galléria</h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProviderScreen