import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <section className='options'>
    <FilterLink filter="SHOW_ALL">Liste de Tâches</FilterLink>
    {''}
    <FilterLink filter="SHOW_ACTIVE">Tâches non-complétés</FilterLink>
    {''}
    <FilterLink filter="SHOW_COMPLETED">Tâches complétés</FilterLink>
  </section>
)

export default Footer
