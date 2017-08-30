/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import Drawing from './Drawing'
import Solves from './Solves'
import Stats from './Stats'
import { borders, subtle } from '../helpers/colors'
import type { Solve, Scramble } from '../../types'

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

type Props = {
  scramble: Scramble,
  solves: Array<Solve>,
  clearSolves: () => mixed,
  removeSolve: (solveId: number) => mixed
}

function Tools({ scramble, solves, clearSolves, removeSolve }: Props) {
  return (
    <Div>
      <Section>
        <H1>Stats</H1>
        <Stats solves={solves} />
      </Section>
      <Section>
        <H1>Scramble</H1>
        <Drawing scramble={scramble.state} />
      </Section>
      <Section>
        <H1>Solves</H1>
        <Solves
          solves={solves}
          clearSolves={clearSolves}
          removeSolve={removeSolve}
        />
      </Section>
    </Div>
  )
}

export default Tools
