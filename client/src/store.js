import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'
import { getCityDataReducer, getProfessionDataReducer, getCategoryDataReducer } from './reducers/searchReducer'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    getCity: getCityDataReducer,
    getProfession: getProfessionDataReducer,
    getCategory: getCategoryDataReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const middleware = [thunk]

const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
}

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store