/**
 * @flow
 */

type TimerState = {
  isOn: boolean,
  startTime?: ?number,
  stopTime?: ?number
}

type TimerAction = {
  type: 'START_TIMER' | 'STOP_TIMER',
  startTime?: number,
  stopTime?: number
}

export type { TimerState, TimerAction }
