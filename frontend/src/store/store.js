import {combineReducers, legacy_createStore} from "redux"
import {applyMiddleware}from "redux"
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  
    })
    const store = legacy_createStore(rootReducer,applyMiddleware(thunk));
    
    export { store };