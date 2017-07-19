/**
 * @flow
 */

type TimerState = {
  startTime?: ?number,
  stopTime?: ?number,
  status: 'paused' | 'uninitialized' | 'initializing' | 'ready' | 'running'
}

type TimerActionType =
  | 'START_TIMER'
  | 'STOP_TIMER'
  | 'START_TIMER_INITIALIZATION'
  | 'FINISH_TIMER_INITIALIZATION'
  | 'CANCEL_TIMER_INITIALIZATION'
  | 'UNPAUSE_TIMER'

type TimerAction = {
  type: TimerActionType,
  startTime?: number,
  stopTime?: number
}

export type { TimerState, TimerAction }
