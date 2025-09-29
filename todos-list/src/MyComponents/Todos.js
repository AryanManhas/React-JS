import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  return (
    <div className='Container'>
      <h3 className='text-center my-3'>Todos List</h3>
      {props.todos.map((todo)=>{
        return <TodoItem todo={todo}/>
      })}
      
    </div>
  )
}

export default Todos


// Exports

//streak maintainance
 