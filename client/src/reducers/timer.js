/**
 * @flow
 */

import type { TimerState as State, Action } from '../types'

const initialState = {
  isOn: false,
  initialization: {}
}

function counter(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'START_TIMER':
      return {
        ...state,
        isOn: true,
        startTime: action.startTime,
        stopTime: null,
        initialization: {}
      }

    case 'STOP_TIMER':
      return {
        ...state,
        isOn: false,
        stopTime: action.stopTime,
        initialization: {}
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
        }
      }

    case 'INITIALIZE_TIMER_FAILURE':
      return {
        ...state,
        initialization: {
          status: 'failure'
        }
      }

    case 'CANCEL_INITIALIZE_TIMER':
      return {
        ...state,
        initialization: {
          ...state.initialization,
          shouldCancel: true
        }
      }

    default:
      return state
  }
}

export default counter
