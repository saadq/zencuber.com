/**
 * @flow
 */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'
import store from './store'

function renderApp(Component) {
  render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.querySelector('#root')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./components/App', () => renderApp(App))
}
