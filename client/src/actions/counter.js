/**
 * @flow
 */

import type { Action } from './types'

function startTimer(): Action {
  return {
    type: 'START_TIMER',
    startTime: Date.now()
  }
}

function stopTimer(): Action {
  return {
    type: 'STOP_TIMER',
    stopTime: Date.now()
  }
}

function resetTimer(): Action {
  return {
    type: 'RESET_TIMER'
  }
}

export { startTimer, stopTimer, resetTimer }
export type { Action }
