/**
 * @flow
 */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import App from './App'
import store from './shared/store'

function renderApp() {
  render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.querySelector('#root')
  )
}

renderApp()

if (module.hot) {
  module.hot.accept('./App', () => renderApp())
}
