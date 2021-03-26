import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Modal = ({children, isModalOpen, closeModal}) => {
    return (
        <>
            {isModalOpen && <div className='modal'>
                <div className='modal-container'>
                    <div className='content'>
                        <FaTimes className='icon' onClick={closeModal}/>
                        {children}
                    </div>
                </div>
            </div>}
        </>
    )

}

export default Modal
