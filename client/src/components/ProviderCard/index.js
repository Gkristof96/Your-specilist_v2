import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import ProfessionBadge from '../ProfessionBadge'
import Rating from '../Rating'

const ProviderCard = ({provider}) => {
    return (
        <>
            <div className='provider-card'>
                <img className='provider-image' src={provider.image} alt={`${provider.firstname} ${provider.lastname}`} />
                <div className='provider-info'>
                    <div className='header'>
                        <h1>{provider.name}</h1>
                        <Rating value={provider.rating} text={provider.rate} />
                    </div>
                    <h2><FaMapMarkerAlt className='icon'/> Hungary, {provider.city}</h2>
                    <p>{provider.bio}</p>
                    <div className='professions-bar'>
                        {provider.professions.map((profession,index) => (
                            <ProfessionBadge profession={profession} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProviderCard
