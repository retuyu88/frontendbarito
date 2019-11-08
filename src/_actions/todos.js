import * as types from '../_redux/types'
import axios from 'axios'
import {ip,token} from '../services/ip'



export const handleGetTodos= () => ({
  type: types.GET_TODOS,
  payload: axios.get(`https://todos-restful-api.herokuapp.com/api/todos`)
});

export const handlePostTodos= (name) => ({
  type: types.POST_TODOS,
  payload: axios.post(`${ip}/todos`,{name : name})
});

export const handleDeleteTodos= (id,name) => ({
  type: types.DELETE_TODOS,
  payload: axios.put(`${ip}/todos/${id}`,{name : name})
});
