/**
 * @flow
 */

import type { TimerState as State } from './types'
import type { Action } from '../../app/types'

const initialState = {
  status: 'uninitialized'
}

function timer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'START_TIMER':
      return {
        ...state,
        startTime: action.startTime,
        status: 'running'
      }

    case 'STOP_TIMER':
      return {
        ...state,
        stopTime: action.stopTime,
        status: 'paused'
      }

    case 'UNPAUSE_TIMER':
      return {
        ...state,
        status: 'uninitialized'
      }

    case 'START_TIMER_INITIALIZATION':
      return {
        ...state,
        status: 'initializing'
      }

    case 'FINISH_TIMER_INITIALIZATION':
      return {
        ...state,
        status: 'ready',
        startTime: null,
        stopTime: null
      }

    case 'CANCEL_TIMER_INITIALIZATION':
      return {
        ...state,
        status: 'uninitialized'
      }

    default:
      return state
  }
}

export default timer
