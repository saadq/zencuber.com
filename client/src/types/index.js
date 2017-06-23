/**
 * @flow
 */

import type { Dispatch as ReduxDispatch } from 'redux'
import type { TimerState, TimerAction } from './timer'
import type { ScrambleState, ScrambleAction } from './scramble'

type State = { timer: TimerState, scramble: ScrambleState }
type Action = TimerAction | ScrambleAction
type Dispatch = ReduxDispatch<Action>

export type {
  State,
  Dispatch,
  Action,
  TimerState,
  TimerAction,
  ScrambleState,
  ScrambleAction
}
