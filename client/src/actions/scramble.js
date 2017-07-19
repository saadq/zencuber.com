/**
 * @flow
 */

import scramby from 'scramby'
import type { ScrambleAction } from '../types'

const scrambler = scramby()

/**
 * Initializes the app with the current and next scramble
 */

function initializeScramble(): ScrambleAction {
  const currScramble = scrambler.getRandomScramble()
  const nextScramble = scrambler.getRandomScramble()

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
  const nextScramble = scrambler.getRandomScramble()

  return {
    type: 'UPDATE_SCRAMBLE',
    nextScramble
  }
}

export { initializeScramble, updateScramble }
