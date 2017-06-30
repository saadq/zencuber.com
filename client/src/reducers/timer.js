/**
 * @flow
 */

import type { TimerState as State, Action } from '../types'

const initialState = {
  status: 'uninitialized'
}

function counter(state: State = initialState, action: Action): State {
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
        status: 'uninitialized'
      }

    case 'START_TIMER_INITIALIZATION':
      return {
        ...state,
        status: 'initializing'
      }

    case 'TIMER_INITIALIZATION_SUCCESS':
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

export default counter
