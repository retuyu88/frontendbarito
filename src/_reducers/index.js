//combine all reducer
import { combineReducers } from 'redux';

import reducerTodos from './todos'

//global state
const appReducer = combineReducers({
  todos : reducerTodos,
})

export default appReducer