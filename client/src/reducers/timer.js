/**
 * @flow
 */

import type { TimerState as State, Action } from '../types'

const initialState = {
  isOn: false
}

function counter(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'START_TIMER':
      return {
        ...state,
        isOn: true,
        startTime: action.startTime,
        stopTime: null
      }

    case 'STOP_TIMER':
      return {
        ...state,
        isOn: false,
        stopTime: action.stopTime
      }

    default:
      return state
  }
}

export default counter
