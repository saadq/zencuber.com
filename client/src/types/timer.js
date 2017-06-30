/**
 * @flow
 */

type TimerState = {
  startTime?: ?number,
  stopTime?: ?number,
  status: 'uninitialized' | 'initializing' | 'ready' | 'running'
}

type TimerActionType =
  | 'START_TIMER'
  | 'STOP_TIMER'
  | 'START_TIMER_INITIALIZATION'
  | 'TIMER_INITIALIZATION_SUCCESS'
  | 'CANCEL_TIMER_INITIALIZATION'

type TimerAction = {
  type: TimerActionType,
  startTime?: number,
  stopTime?: number
}

export type { TimerState, TimerAction }
