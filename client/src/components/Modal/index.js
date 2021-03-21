import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Modal = ({isModalOpen, closeModal}) => {
    return (
        <>
            {isModalOpen && <div className='modal'>
                <div className='modal-container'>
                    <div className='content'>
                        <FaTimes className='icon' onClick={closeModal}/>
                        <h1>Köszönjük a bizalmat!</h1>
                        <p>Hamarosan felkeresnek a szakemberek</p>
                    </div>
                </div>
            </div>}
        </>
    )

}

export default Modal
