import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { login } from '../../actions/userActions'
import Loader from '../../components/Loader'
import Message from '../../components/Message'

const LoginScreen = ({location,history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/' 

    useEffect(() => {
        if (userInfo) {
          history.push(redirect)
        }
      }, [history, userInfo, redirect])

      const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
      }
    return (
        <>
            <div className='background'></div>
            <div className='login-screen'>
                <div className='login-card'>
                    <h1>Bejelentkezés</h1>
                    <Link to='/'><FaTimes className='icon'/></Link>
                    {error && <Message type='error' message={error}/>}
                    {loading && <Loader />}
                    <form onSubmit={submitHandler}>
                        <label className='input-group'>
                            Email
                            <input  type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </label>
                        <label className='input-group'>
                            Jelszó
                            <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        </label>
                        {/*<div className='login-settings'>
                            <label>
                                <input type='checkbox' />
                                <span>Emlékezz rám!</span>
                            </label>
                            <Link to='/'>
                                elfelejtett jelszó
                            </Link>
                        </div>*/}
                        
                        <button type='submit'>Bejelentkezés</button>
                    </form>
                    <h2>Nincs még felhasználód? <Link to='/register'>Regisztrálj</Link> most!</h2>
                </div>
            </div>
        </>
    )
}

export default LoginScreen
