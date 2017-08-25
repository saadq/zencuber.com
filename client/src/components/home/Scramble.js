/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  width: 100%;
  background: #22262F;
  color: #56656C;
  text-align: center;
  padding: 2em 0;
  word-spacing: 1em;
  font-size: 1em;
`

function Scramble() {
  return (
    <Div>B2 U' B2 F2 U' R2 F2 U R2 F2 U L' R B' U2 R' F R' D2 R' U'</Div>
  )
}

export default Scramble
