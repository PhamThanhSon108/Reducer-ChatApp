import './App.css';
import { useContext, useRef } from 'react';
import Context from './store/Context';
import { ADD_INPUT, DEL_TODO, SET_INPUT } from './store/constant';

function App() {
  const ref = useRef()
  const [state,dispatch]  = useContext(Context)
  const {todos} = state
  console.log(state.todos)
  function setInput(payload) {
    return({type: SET_INPUT,payload})
  }
  function addTodo(payload) {
    return ({type:ADD_INPUT,payload})
  }
  function delTodo(payload) {
    return ({type:DEL_TODO,payload})
  }
  return (
    <div className="App">
      <input 
      ref={ref}
      placeholder='type here'
      value={state.todoInput}
      onChange = {(e)=>{dispatch(setInput(e.target.value))

      }}
      />
      <button onClick={()=>{if(state.todoInput) {dispatch(addTodo(state.todoInput))
      dispatch(setInput(''))
      ref.current.focus()
      }}}>Add</button>
      <ul>
        {todos.map((value,index)=><li key={index} >{value} <span onClick={(key)=>{dispatch(delTodo(index))}}>x</span></li>)}
      </ul>
    </div>
  );
}

export default App;
