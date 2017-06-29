/**
 * @flow
 */

type TimerState = {
  isOn: boolean,
  startTime?: ?number,
  stopTime?: ?number,
  initialization: {
    status: 'idle' | 'pending' | 'success' | 'failure',
    shouldCancel?: boolean
  }
}

type TimerActionType =
  | 'START_TIMER'
  | 'STOP_TIMER'
  | 'START_INITIALIZE_TIMER'
  | 'INITIALIZE_TIMER_SUCCESS'
  | 'CANCEL_TIMER_INITIALIZATION'

type TimerAction = {
  type: TimerActionType,
  startTime?: number,
  stopTime?: number
}

export type { TimerState, TimerAction }
