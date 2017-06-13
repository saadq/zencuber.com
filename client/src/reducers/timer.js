/**
 * @flow
 */

import type { Action } from '../actions/timer'

type State = {
  isOn: boolean,
  startTime?: number,
  stopTime?: ?number
}

const initialState = {
  isOn: false
}

function timer(state: State = initialState, action: Action): State {
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

    case 'RESET_TIMER':
      return {
        ...state,
        isOn: false,
        startTime: 0,
        stopTime: 0
      }

    default:
      return state
  }
}

export default timer
export type { State as TimerState }
