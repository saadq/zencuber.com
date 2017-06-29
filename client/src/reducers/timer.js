/**
 * @flow
 */

import type { TimerState as State, Action } from '../types'

const initialState = {
  isOn: false,
  initialization: {
    status: 'idle'
  }
}

function counter(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'START_TIMER':
      return {
        ...state,
        isOn: true,
        startTime: action.startTime
      }

    case 'STOP_TIMER':
      return {
        ...state,
        isOn: false,
        stopTime: action.stopTime,
        initialization: {
          status: 'idle'
        }
      }

    case 'START_INITIALIZE_TIMER':
      return {
        ...state,
        initialization: {
          status: 'pending'
        }
      }

    case 'INITIALIZE_TIMER_SUCCESS':
      return {
        ...state,
        initialization: {
          status: 'success'
        },
        startTime: null,
        stopTime: null
      }

    case 'CANCEL_TIMER_INITIALIZATION':
      return {
        ...state,
        initialization: {
          status: 'failure'
        }
      }

    default:
      return state
  }
}

export default counter
