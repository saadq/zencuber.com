/**
 * @flow
 */

type TimerState = {
  isOn: boolean,
  startTime?: ?number,
  stopTime?: ?number
}

type TimerAction =
 | { type: 'START_TIMER', startTime: number }
 | { type: 'STOP_TIMER', stopTime: number }

export type {
  TimerState,
  TimerAction
}
