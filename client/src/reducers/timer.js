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
export type { State as TimerState }
