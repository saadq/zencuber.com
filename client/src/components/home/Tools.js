/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { borders } from '../helpers/colors'

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
  width: 30%;
  height: 0;
  padding-bottom: 27.5%;
  border: 1px solid ${borders};
`

function Tools() {
  return (
    <Wrapper>
      <Section>
        stats
      </Section>
      <Section>
        scramble
      </Section>
      <Section>
        times
      </Section>
    </Wrapper>
  )
}

export default Tools
