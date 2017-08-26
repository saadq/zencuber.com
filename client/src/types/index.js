/**
 * @flow
 */

import type { Dispatch as ReduxDispatch } from 'redux'
import type { TimerState, TimerAction } from './timer'
import type { Scramble, ScrambleState, ScrambleAction } from './scramble'
import type { Solve, SolvesState, SolvesAction } from './solves'

type State = {
  timer: TimerState,
  scramble: ScrambleState,
  solves: SolvesState
}

type GetState = () => State
type Action = TimerAction | ScrambleAction | SolvesAction
type Dispatch = ReduxDispatch<Action>
type AsyncAction = (dispatch: Dispatch, getState: GetState) => any

export type {
  State,
  Dispatch,
  Action,
  AsyncAction,
  TimerState,
  TimerAction,
  Scramble,
  ScrambleState,
  ScrambleAction,
  Solve,
  SolvesState,
  SolvesAction
}
