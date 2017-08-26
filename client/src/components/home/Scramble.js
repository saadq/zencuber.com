/**
 * @flow
 */

import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { initializeScramble, updateScramble } from '../../actions/scramble'
import { subtle } from '../helpers/colors'
import type { State } from '../../types'

type Props = {
  scramble: {
    scrambleString: string,
    state: string
  },
  updateScramble: () => mixed,
  initializeScramble: () => mixed
}

const Div = styled.div`
  width: 100%;
  background: #22262F;
  color: ${subtle};
  text-align: center;
  padding: 2em 0;
  word-spacing: 1em;
  font-size: 1em;
`

function Scramble({ scramble }: Props) {
  return <Div>{scramble.scrambleString}</Div>
}

function mapStateToProps(state: State) {
  return {
    scramble: state.scramble.currScramble
  }
}

const mapDispatchToProps = {
  initializeScramble,
  updateScramble
}

export default connect(mapStateToProps, mapDispatchToProps)(Scramble)
