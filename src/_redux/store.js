import { createStore, combineReducers, applyMiddleware } from 'redux';


//import middleware from './middleware'
import appReducer from '../_reducers/index'



const persistedReducer = persistReducer(appReducer)


const store = createStore(persistedReducer, {})
const persistor = persistStore(store)



export {store,persistor}