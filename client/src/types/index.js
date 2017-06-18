/**
 * @flow
 */

import type { Dispatch as ReduxDispatch } from 'redux'
import type { TimerState, TimerAction } from './timer'

type State = { timer: TimerState }
type Action = TimerAction
type Dispatch = ReduxDispatch<Action>

export type {
  State,
  Dispatch,
  Action,
  TimerState,
  TimerAction
}
