/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import Drawing from './Drawing'
import Solves from './Solves'
import { borders, subtle } from '../helpers/colors'

const Wrapper = styled.div`
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
  font-weight: lighter;
`

function Tools() {
  return (
    <Wrapper>
      <Section>
        <H1>Stats</H1>
      </Section>
      <Section>
        <H1>Scramble</H1>
        <Drawing />
      </Section>
      <Section>
        <H1>Solves</H1>
        <Solves />
      </Section>
    </Wrapper>
  )
}

export default Tools
