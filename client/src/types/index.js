/**
 * @flow
 */

import type { Dispatch as ReduxDispatch } from 'redux'
import type { TimerState, TimerAction } from './timer'
import type { ScrambleState, ScrambleAction } from './scramble'

type State = { timer: TimerState, scramble: ScrambleState }
type GetState = () => State
type Action = TimerAction | ScrambleAction
type Dispatch = ReduxDispatch<Action>
type AsyncAction = (dispatch: Dispatch, getState: GetState) => any

export type {
  State,
  Dispatch,
  Action,
  AsyncAction,
  TimerState,
  TimerAction,
  ScrambleState,
  ScrambleAction
}
