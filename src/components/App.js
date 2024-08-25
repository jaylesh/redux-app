import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <section className='container__task'>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </section>
)

export default App
