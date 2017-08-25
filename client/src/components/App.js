/**
 * @flow
 */

import React from 'react'
import { injectGlobal } from 'styled-components'
import TopBar from './TopBar'
import Home from './home/Home'
import { background, foreground } from './helpers/colors'

injectGlobal`
  body {
    background: ${background};
    color: ${foreground};
    font-family: 'Avenir';
  }
`

function App() {
  return (
    <div>
      <TopBar />
      <Home />
    </div>
  )
}

export default App
