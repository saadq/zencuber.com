/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { subtle } from '../../common/colors'

const Div = styled.div`
  width: 100%;
  background: #22262F;
  color: ${subtle};
  text-align: center;
  padding: 2em 0;
  word-spacing: 1em;
  font-size: 1em;
`

type Props = {
  scramble: string
}

function Scramble({ scramble }: Props) {
  return <Div>{scramble}</Div>
}

export default Scramble
