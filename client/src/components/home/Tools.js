/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { borders } from '../helpers/colors'
import Drawing from './Drawing'

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
  height: 45vh;
  border: 1px solid ${borders};
`

const H1 = styled.h1`
  color: #56656C;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: lighter;
  position: relative;
  left: 15px;
  top: 15px;
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
        <H1>Times</H1>
      </Section>
    </Wrapper>
  )
}

export default Tools
