/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { Drawing, Solves, Stats } from './components'
import { borders, subtle } from '../../common/colors'
import type { Solve, Scramble } from '../../app/types'

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Section = styled.section`
  background: #20232C;
  max-width: 95%;
  width: 50vh;
  height: 40vh;
  border: 1px solid ${borders};
  padding: 10px;

  @media screen and (max-width: 1000px) {
    width: 95vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
  }
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
        <H1>Solves</H1>
        <Solves
          solves={solves}
          clearSolves={clearSolves}
          removeSolve={removeSolve}
        />
      </Section>
      <Section>
        <H1>Stats</H1>
        <Stats solves={solves} />
      </Section>
      <Section>
        <H1>Scramble</H1>
        <Drawing scramble={scramble.state} />
      </Section>
    </Div>
  )
}

export default Tools
