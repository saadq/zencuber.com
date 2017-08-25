/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { primary } from '../helpers/colors'

const H1 = styled.h1`
  font-size: 7em;
  height: 27vh;
  line-height: 27vh;
  color: ${primary};
`

function Timer() {
  return (
    <H1>32.47</H1>
  )
}

export default Timer
