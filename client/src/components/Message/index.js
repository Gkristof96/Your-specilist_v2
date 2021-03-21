import React from 'react'
import { VscError } from 'react-icons/vsc'

const Message = ({message, type}) => {
    return (
        <div className='message-container'>
            {type === 'error' && <VscError className='icon'/>}
            <span className={type}>{message}</span>
        </div>
    )
}

Message.defaultProps = {
    type: 'standard',
}

export default Message
