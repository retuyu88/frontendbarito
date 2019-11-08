import * as types from '../_redux/types'
import axios from 'axios'

export const handleGetTodos= () => ({
  type: types.GET_TODOS,
  payload: axios.get(`https://todos-restful-api.herokuapp.com/api/todos`)
});

export const handlePostTodos= (name) => ({
  type: types.POST_TODOS,
  payload: axios.post(`https://todos-restful-api.herokuapp.com/api/todos`,{name : name})
});

export const handleDeleteTodos= (id) => ({
  type: types.DELETE_TODOS,
  payload: axios.put(`https://todos-restful-api.herokuapp.com/api/todos/${id}`)
});
