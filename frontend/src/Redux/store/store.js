import {combineReducers, legacy_createStore} from "redux"
import {applyMiddleware}from "redux";
import userReducer from "../USER/userReducer";
import {thunk} from 'redux-thunk'

const rootReducer = combineReducers({
   userReducer
    })
    const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
    
    export  {store};