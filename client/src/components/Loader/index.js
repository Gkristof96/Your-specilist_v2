import React from 'react'

const Loader = ({size}) => {
    return (
        <div className='loader-container'>
            <img src='/images/loader.gif' alt='loader' className={size}/>
        </div>
    )
}

Loader.defaultProps = {
    size: 'small',
}

export default Loader
