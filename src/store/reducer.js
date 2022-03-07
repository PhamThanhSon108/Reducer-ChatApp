import React from 'react'
import { ADD_INPUT, DEL_TODO, SET_INPUT } from './constant'

const initState = {
  todos: [],
  todoInput: ''
}
export {initState}
export default function reducer(state, action) {
  switch(action.type) {
    case SET_INPUT:
      return {
        ...state,
        todoInput: action.payload
      }
    case ADD_INPUT:
      return {
        ...state,
        todos: [
            ...state.todos,
            action.payload
        ]
    }
    case DEL_TODO:
    const newTodos = [...state.todos]
    newTodos.splice(action.payload,1)
    return {
        ...state,
        todos: [...newTodos]
      }
  }

  return (
    <></>
  )
}
