/**
 * @flow
 */

type TimerState = {
  isOn: boolean,
  startTime?: ?number,
  stopTime?: ?number,
  initialization: {
    status?: 'pending' | 'success' | 'failure',
    shouldCancel?: boolean
  }
}

type TimerActionType =
  | 'START_TIMER'
  | 'STOP_TIMER'
  | 'START_INITIALIZE_TIMER'
  | 'CANCEL_INITIALIZE_TIMER'
  | 'INITIALIZE_TIMER_SUCCESS'
  | 'INITIALIZE_TIMER_FAILURE'

type TimerAction = {
  type: TimerActionType,
  startTime?: number,
  stopTime?: number
}

export type { TimerState, TimerAction }
