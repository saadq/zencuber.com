/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import Drawing from './Drawing'
import Solves from './Solves'
import Stats from './Stats'
import { borders, subtle } from '../helpers/colors'

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
`

const Section = styled.section`
  background: #20232C;
  width: 50vh;
  height: 40vh;
  border: 1px solid ${borders};
  padding: 10px;
`

const H1 = styled.h1`
  color: ${subtle};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 100;
  font-family: 'Avenir Next';
`

function Tools() {
  return (
    <Div>
      <Section>
        <H1>Stats</H1>
        <Stats />
      </Section>
      <Section>
        <H1>Scramble</H1>
        <Drawing />
      </Section>
      <Section>
        <H1>Solves</H1>
        <Solves />
      </Section>
    </Div>
  )
}

export default Tools