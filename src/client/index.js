import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

$(() => {
  ReactDOM.render(<App />, $('#app')[0])
  $('.button-collapse').sideNav()
  $('select').material_select()
})
