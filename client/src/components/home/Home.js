/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import Timer from './Timer'
import Scramble from './Scramble'
import Tools from './Tools'
import { accent, borders } from '../helpers/colors'

const Main = styled.main`
  width: 95%;
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
  background: ${accent};
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid ${borders};
`

function Home() {
  return (
    <div>
      <Main>
        <Timer />
        <Scramble />
      </Main>
      <Tools />
    </div>
  )
}

export default Home
