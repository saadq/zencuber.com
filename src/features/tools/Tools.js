/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import Drawing from './components/Drawing'
import Solves from './components/Solves'
import Stats from './components/Stats'
import { borders, subtle } from '../../shared/colors'
import type { Solve, Scramble } from '../../shared/types'

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
  font-weight: lighter;
  letter-spacing: 1px
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
