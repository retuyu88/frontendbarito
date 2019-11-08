import * as types from '../_redux/types'

const initialState = {
  isLoading: false,
  isredLoading : false,
  isError: false,
  isSuccess: false,
  todos: []
};

export default function reducerTodos(state = initialState, action) {
  switch (action.type) {
    case `${types.GET_TODOS}_PENDING`:
    case `${types.POST_TODOS}_PENDING`:  
    case `${types.DELETE_TODOS}_PENDING`:  
      return {
        ...state,
        isLoading: true
      };

    case `${types.DELETE_TODOS}_FULFILLED`:
        return {
          ...state,
          isRedLoading : false,
          isSuccess: true,
          todos: action.payload.data.data
        };
    case `${types.GET_TODOS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        todos: action.payload.data.data
      };
    case `${types.POST_TODOS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess : true,
        todos: state.todos.concat(action.payload.data.data)
      }
      
    case `${types.GET_TODOS}_REJECTED`:
    case `${types.DELETE_TODOS}_REJECTED`:
    case `${types.POST_TODOS}_REJECTED`:  
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
}