/**
 * @flow
 */

import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import TopBar from './TopBar'
import Timer from './Timer'
import Scramble from './Scramble'

injectGlobal`
  body {
    background: #1B1E25;
    color: #c0c5ce;
    font-family: 'Avenir';
  }
`

const Main = styled.main`
  width: 95%;
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
  background: #20232C;
  display: flex;
  align-items: center;
  flex-direction: column
`

function App() {
  return (
    <div>
      <TopBar />
      <Main>
        <Timer />
        <Scramble />
      </Main>
    </div>
  )
}

export default App
