/**
 * @flow
 */

import Scrambo from 'scrambo'
import type { Action } from '../types'

const scrambler = new Scrambo().type('333')

function initializeScramble(): Action {
  const [currScramble, nextScramble]: Array<string> = scrambler.get(2)

  return {
    type: 'INITIALIZE_SCRAMBLE',
    currScramble,
    nextScramble
  }
}

function updateScramble(): Action {
  const [newScramble]: Array<string> = scrambler.get()

  return {
    type: 'UPDATE_SCRAMBLE',
    newScramble
  }
}

export { initializeScramble, updateScramble }
