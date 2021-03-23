import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditMenu from '../../components/EditMenu'
import { getUserData } from '../../actions/userActions'

const GalleryUploadScreen = ({history}) => {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if(!userInfo){
            history.push('/login')
        } else {
            dispatch(getUserData(userInfo._id))
        }
    },[dispatch, userInfo, history])
    return (
        <>
            <section className='edit-background'></section>
            <section className='edit-content'>
                <div className='container'>
                        <div className='edit-menu'>
                            <EditMenu/>
                        </div>
                        <div className='gallery-upload-card'>
                            <h1>Jelenleg nem tölthető fel fénykép</h1>
                            <p>Lehetőséged van képeket feltölteni korábbi munkáidról, illetve itt tudod törölni a már feltöltött képeidet is.</p>
                            <div className='gallery-container'>
                                <h1>Feltöltött képek</h1>
                            </div>
                            <form>
                                <label>Tölts fel egy képet</label>
                                <input type='file' />

                                <button type='submit'>Feltöltés</button>
                            </form>
                        </div>
                </div>
            </section>
        </>
    )
}

export default GalleryUploadScreen
