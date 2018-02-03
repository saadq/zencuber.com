/**
 * @flow
 */

import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Timer from '../features/timer/Timer'
import Scramble from '../features/scramble/Scramble'
import Tools from '../features/tools/Tools'
import * as SolvesActions from '../features/tools/actions'
import { accent, borders } from '../shared/colors'
import type { State, Solve } from '../shared/types'

const Main = styled.main`
  width: 95%;
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
  background: ${accent};
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid ${borders};
`

type Props = {
  scramble: {
    scrambleString: string,
    state: string
  },
  solves: Array<Solve>,
  clearSolves: () => mixed,
  removeSolve: (solveId: number) => mixed
}

function Home({ scramble, solves, clearSolves, removeSolve }: Props) {
  return (
    <div>
      <Main>
        <Timer />
        <Scramble scramble={scramble.scrambleString} />
      </Main>
      <Tools
        clearSolves={clearSolves}
        removeSolve={removeSolve}
        scramble={scramble}
        solves={solves}
      />
    </div>
  )
}

function mapStateToProps(state: State) {
  return {
    scramble: state.scramble.currScramble,
    solves: state.solves
  }
}

const mapDispatchToProps = {
  ...SolvesActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
