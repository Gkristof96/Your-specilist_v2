import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { register } from '../../actions/userActions'
import Loader from '../../components/Loader'
import Message from '../../components/Message'

const RegisterScreen = ({history, location}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
      if (userInfo) {
        history.push(redirect)
      }
    }, [history, userInfo, redirect])

    const handleSubmit = (e) => {
      e.preventDefault()
      if (password !== cpassword) {
        setMessage('Passwords do not match')
      } else {
        dispatch(register(name, email, password))
        setMessage('')
      }
    }
    return (
        <>
            <div className='background'></div>
            <div className='register-screen'>
                <div className='register-card'>
                    <h1>Regisztráció</h1>
                    <Link to='/'><FaTimes className='icon'/></Link>
                    {message && <Message type='error' message={message} />}
                    {error && <Message type='error' message={error} />}
                    {loading && <Loader />}
                    <form onSubmit={handleSubmit}>
                        <label className='input-group'>
                            Név
                            <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} required/>
                        </label>
                        <label className='input-group'>
                            Email
                            <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </label>
                        <label className='input-group'>
                            Jelszó
                            <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        </label>
                        <label className='input-group'>
                            Jelszó újra
                            <input  type='password' name='cpassword' value={cpassword} onChange={(e) => setCpassword(e.target.value)} required/>
                        </label>
                        <label className='checkbox'>
                            <input type='checkbox' required/>
                            <span>Elfogadom a <span>felhasználási feltételeket</span>!</span>
                        </label>

                        <button type='submit'>Regisztráció</button>
                    </form>
                    <h2>Van már felhasználód? <Link to='/login'>Jelentkez be</Link></h2>
                </div>
            </div>
        </>
    )
}

export default RegisterScreen
