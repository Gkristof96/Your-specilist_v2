import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditMenu from '../../components/EditMenu'
import { getUserData, changePassword } from '../../actions/userActions'

const PasswordChangeScreen = ({match}) => {
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const dispatch = useDispatch()

    const userDetail = useSelector(state => state.userDetail)
    const { provider } = userDetail

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userChangePassword = useSelector(state => state.userChangePassword)
    const { success } = userChangePassword

    useEffect(() => {
        if(success) {
            setPassword('')
            setNewPassword('')
            setConfirmPassword('')
        }
        dispatch(getUserData(userInfo._id))
    },[dispatch, userInfo, success])

    const submitHandler = (e) => {
        e.preventDefault()
        if (newPassword !== confirmPassword) {
        } else {
          dispatch(changePassword({ password, newPassword }))
        }
      }
    return (
        <>
            <section className='edit-background'></section>
            <section className='edit-content'>
                <div className='container'>
                        <div className='edit-menu'>
                            <EditMenu match={match}/>
                        </div>
                        <div className='password-change-card'>
                            <form onSubmit={submitHandler}>
                                <img src={provider.image} alt={provider.name} />
                                <h1>{provider.name}</h1>
                                <label>Régi Jelszó</label>
                                <input type='text' value={password} onChange={(e) => setPassword(e.target.value)}/>
                                <label>Új Jelszó</label>
                                <input type='text' value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                                <label>Új Jelszó újra</label>
                                <input type='text' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                                <button type='submit'>Mentés</button>
                            </form>
                        </div>
                </div>
            </section>
        </>
    )
}

export default PasswordChangeScreen
