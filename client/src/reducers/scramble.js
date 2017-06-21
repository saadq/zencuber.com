/**
 * @flow
 */

import type { ScrambleState as State, Action } from '../types'

const initialState = {
  prevScramble: null,
  currScramble: null,
  nextScramble: null
}

function scramble(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'INITIALIZE_SCRAMBLE':
      return {
        prevScramble: null,
        currScramble: action.currScramble,
        nextScramble: action.nextScramble
      }

    case 'UPDATE_SCRAMBLE':
      return {
        prevScramble: state.currScramble,
        currScramble: state.nextScramble,
        nextScramble: action.newScramble
      }

    default:
      return state
  }
}

export default scramble
