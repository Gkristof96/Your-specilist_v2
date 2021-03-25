import React from 'react'

const ProfessionBadge = ({profession, size}) => {
    return (
        <div className='profession-badge'>
            <span className={`profession-badge__title ${size}`}>
                {profession.name}
            </span>
        </div>
    )
}

ProfessionBadge.defaultProps = {
    size: 'medium',
}

export default ProfessionBadge