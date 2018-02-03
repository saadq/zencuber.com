/**
 * @flow
 */

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './app/App'
import store from './app/store'

const root = document.querySelector('#root')

if (root) {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  )
}

if (module.hot) {
  module.hot.accept()
}
