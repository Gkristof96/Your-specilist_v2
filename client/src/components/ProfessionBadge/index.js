import React from 'react'

const ProfessionBadge = ({profession}) => {
    return (
        <div className='profession-badge'>
            <span className='profession-badge__title'>{profession.name}</span>
        </div>
    )
}

export default ProfessionBadge