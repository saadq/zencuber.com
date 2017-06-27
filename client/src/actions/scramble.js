/**
 * @flow
 */

import Scrambo from 'scrambo'
import type { ScrambleAction } from '../types'

const scrambler = new Scrambo().type('333')

/**
 * Initializes the app with the current and next scramble
 */

function initializeScramble(): ScrambleAction {
  const [currScramble, nextScramble]: Array<string> = scrambler.get(2)

  return {
    type: 'INITIALIZE_SCRAMBLE',
    currScramble,
    nextScramble
  }
}

/**
 * Updates the previous, current, and next scramble
 */

function updateScramble(): ScrambleAction {
  const [newScramble]: Array<string> = scrambler.get()

  return {
    type: 'UPDATE_SCRAMBLE',
    newScramble
  }
}

export { initializeScramble, updateScramble }
