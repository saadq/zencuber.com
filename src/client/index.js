import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './containers/App'

$(() => {
  initMaterialize()
  renderApp()
})

function initMaterialize() {
  $('.button-collapse').sideNav()
  $('select').material_select()
}

function renderApp() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
}
