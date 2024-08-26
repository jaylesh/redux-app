import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className='container__task-inner'>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input placeholder="veuillez insérer votre tâches"
          ref={node => {
            input = node
          }}
        />
        <button className='btn__insert-task' type="submit">Ajouté les tâches</button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
