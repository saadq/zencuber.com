/**
 * @flow
 */

import type { TimerAction } from '../types'

function startTimer(): TimerAction {
  return {
    type: 'START_TIMER',
    startTime: Date.now()
  }
}

function stopTimer(): TimerAction {
  return {
    type: 'STOP_TIMER',
    stopTime: Date.now()
  }
}

export { startTimer, stopTimer }
